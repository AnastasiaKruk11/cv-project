import { Sidebar } from "../../shared/ui/sidebar/Sidebar";
import { Header } from "../../shared/ui/header/Header";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { useGetUser } from "../../shared/hooks/query-hooks";
import { useNavigate, generatePath } from 'react-router-dom';
import { ButtonTextRed } from "../../shared/ui/buttons/ButtonTextRed";
import { LanguageCard } from "../../shared/ui/cards/LanguageCard";

export const Languages = () => {

    const {id} = useParams();
    const { data } = useGetUser(id);
    const navigate = useNavigate();
    const { t: translate } = useTranslation();
    
    return (
        <div className={'h-full w-full flex'}>
            <Sidebar userAvatar={data?.user.profile.avatar as string} userName={`${data?.user.profile.first_name} ${data?.user.profile.last_name}`} />
            <div className={'w-full'}>
                <div>
                    <Header firstName={data?.user.profile.first_name as string} lastName={data?.user.profile.last_name as string} ifTailSection tailSectionText={"user_page.languages"} />
                </div>
                <div>
                    <ButtonTextRed text={translate('user_page.profile')} onClick={() => navigate(generatePath('/user/:id', {id: id as string}))} />
                    <ButtonTextRed text={translate('user_page.skills')} onClick={() => navigate(generatePath('/user/:id/skills', {id: id as string}))} />
                    <ButtonTextRed text={translate('user_page.languages')} className={'!border-b-1 !text-red-700 !rounded-[0px] !w-[120px] !h-[40px]'} />
                </div>
                <div className={'flex flex-wrap m-5'}>
                    {data?.user?.profile?.languages?.map((item) => 
                        <div className={'w-60'}>
                            <LanguageCard key={item.name} language={item.name} level={item.proficiency} />
                        </div>)}
                </div>
            </div>
        </div>
    )
}