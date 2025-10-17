import { Sidebar } from "../../shared/ui/sidebar/Sidebar";
import { Header } from "../../shared/ui/header/Header";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { useGetUser } from "../../shared/hooks/query-hooks";
import { useNavigate, generatePath } from 'react-router-dom';
import { ButtonTextRed } from "../../shared/ui/buttons/ButtonTextRed";
import { useGetSkillGroups } from "../../shared/hooks/query-hooks";
import { Progressbar } from "../../shared/ui/progressbar/Progressbar";
import type { SkillMastery } from "../../graphql/graphql";
import { AddButton } from "../../shared/ui/buttons/AddButton";
import { DeleteButton } from "../../shared/ui/buttons/DeleteButton";

type GroupItemType = {
  id: string;
  name: string;
};

type GroupListType = Record<string, GroupItemType>;

interface GroupSkillType {
    name: string,
    skills: SkillMastery[]
}

export const Skills = () => {

    const {id} = useParams();
    const { data } = useGetUser(id);
    const { data: skillGroupData } = useGetSkillGroups();
    const navigate = useNavigate();
    const { t: translate } = useTranslation(); 
    
    const skillGroups = skillGroupData?.skillCategories.reduce((acc, group) => {
        acc[group.id] = group;
        return acc;
    }, {} as GroupListType);

    const groupsOfUserSkills = data?.user.profile.skills.reduce((groupedUserSkills, skill) => {
        const { categoryId } = skill;
        
     if (categoryId) {
           const groupName = skillGroups?.[categoryId].name;
        
        if (!groupedUserSkills[categoryId]) {
            groupedUserSkills[categoryId] = {
            name: groupName || '',
            skills: [],
            };
        }

        groupedUserSkills[categoryId].skills.push(skill);
     }
        
        return groupedUserSkills;
    }, {} as Record<string, GroupSkillType>);

    console.log(groupsOfUserSkills)

    const categories = Object.values(groupsOfUserSkills || {});

    categories?.forEach(item => {(
        <div className={'flex flex-col'}>
            <span className={'text-white'}>{item.name}</span>

        </div>
    )
    })

    return (
        <div className={'h-full w-full flex'}>
            <Sidebar userAvatar={data?.user.profile.avatar} userName={`${data?.user.profile.first_name} ${data?.user.profile.last_name}`} />
            <div className={'w-full'}>
                <div>
                    <Header firstName={data?.user.profile.first_name as string} lastName={data?.user.profile.last_name as string} ifTailSection tailSectionText={"user_page.skills"} />
                </div>
                <div>
                    <ButtonTextRed text={translate('user_page.profile')} onClick={() => navigate(generatePath('/user/:id', {id: id as string}))} />
                    <ButtonTextRed text={translate('user_page.skills')} className={'!border-b-1 !text-red-700 !rounded-[0px] !w-[120px] !h-[40px]'} />
                    <ButtonTextRed text={translate('user_page.languages')} onClick={() => navigate(generatePath('/user/:id/languages', {id: id as string}))} />
                </div>
                {
                categories?.map((item) => 
                    <div className={'flex flex-col m-9'}>
                        <span className={'text-white'}>{item.name}</span>
                        <div className={'flex flex-row'}>
                            {
                                item.skills.map((item) =>
                                    <div className={'m-3'}>
                                        <Progressbar userLevel={item.mastery} skillName={item.name} />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )}
                <div className={'flex justify-end'}>
                    <AddButton btnText={'Add skill'} />
                    <DeleteButton btnText={'Remove skills'} />
                </div>
            </div>       
        </div>
    )
}