import { Sidebar } from "../../shared/ui/sidebar/Sidebar";
import { useParams } from "react-router";
import { ButtonTextRed } from "../../shared/ui/buttons/ButtonTextRed";
import { InputOutlined } from "../../shared/ui/inputs/InputOutlined";
import { SelectOutlined } from "../../shared/ui/selects/SelectOutlined";
import { ButtonContainedRed } from "../../shared/ui/buttons/ButtonContainedRed";
import Avatar from '@mui/material/Avatar';
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useGetUser, useGetPositions, useGetDepartments } from "../../shared/hooks/custom-hooks";
import { useState } from "react";

export const User = () => {

    const {id} = useParams();

    const { data } = useGetUser(id);
    const { data: departmentData } = useGetDepartments();
    const { data: positionData } = useGetPositions();

    const { t: translate } = useTranslation();

    //const setFormData = useFormStore((state) => state.setFormStore);

    const [firstName, setFirstName] = useState(data?.user.profile.first_name);
    const [lastName, setLastName] = useState(data?.user.profile.last_name);
    const [department, setDepartment] = useState(data?.user.department?.name);
    const [position, setPosition] = useState(data?.user.position?.name);

    const valueDiffersFromLast = firstName !== data?.user.profile.first_name || 
                                     lastName !== data?.user.profile.last_name ||
                                     department !== data?.user.department?.name ||
                                     position !== data?.user.position?.name;
    

    return (
        <div className={'h-full w-full flex'}>
            <Sidebar userAvatar={data?.user.profile.avatar} userName={`${data?.user.profile.first_name} ${data?.user.profile.last_name}`} />
            <div>
                <div className={'flex my-[15px] w-full'}>
                    <span className={'text-white'}>{translate('user_page.employees')}</span>
                    <div className={'p-[8px]'}><img src='/arrow-right.png'/></div>
                    <div className={'p-[4px] mr-[8px]'}><img src='/user.png'/></div>
                    <span className={'text-red-800'}>{`${data?.user.profile.first_name} ${data?.user.profile.last_name}`}</span>
                </div>
                <div>
                    <ButtonTextRed text={translate('user_page.profile')} className={'!border-b-1 !text-red-700 !rounded-[0px] !w-[120px] !h-[40px]'} />
                    <ButtonTextRed text={translate('user_page.skills')} />
                    <ButtonTextRed text={translate('user_page.languages')} />
                </div>
                <div className={'flex flex-col w-full justify-center'}>
                    <div className={'flex justify-center items-center'}>
                        <div className={'m-[30px]'}>{data
                        ? <Avatar alt={`${data.user.profile.first_name}`} src={`${data.user.profile.avatar}`} className={'!w-[120px] !h-[120px]'} />
                        : null}
                        </div>
                        <div className={'text-white'}>
                            <div>
                                <Button variant="text"><img src="/download.png"/></Button>
                                <span className={'text-[20px] font-medium'}>{translate('user_page.avatar_upload')}</span>
                            </div>
                            <span className={'opacity-60'}>{translate('user_page.file_format')}</span>
                        </div>
                    </div>
                    <div className={'text-white flex flex-col items-center'}>
                        <span className={'text-[24px]'}>{`${data?.user.profile.first_name} ${data?.user.profile.last_name}`}</span>
                        <span className={'opacity-60 mt-[8px] mb-[3px]'}>{`${data?.user.email}`}</span>
                        <span>{translate('user_page.member_since')} {new Date(Number(data?.user.created_at)).toDateString()}</span>
                    </div>
                    <div className={'flex mt-[40px] justify-around max-w-[855px]'}>
                        <div className={'flex flex-col !mr-[25px]'}>
                            <InputOutlined labelText={translate('user_page.first_name')} className={'!mb-[20px]'} onChange={event => setFirstName(event.target.value)} />
                            <SelectOutlined labelText={translate('user_page.department')} items={departmentData?.departments} onChange={event => setDepartment(event.target.value)} />
                        </div>
                        <div className={'flex flex-col'}>
                            <InputOutlined labelText={translate('user_page.last_name')} className={'!mb-[20px]'} onChange={event => setLastName(event.target.value)} />
                            <SelectOutlined labelText={translate('user_page.position')} items={positionData?.positions} className={'!mb-[20px]'} onChange={event => setPosition(event.target.value)} />
                            <ButtonContainedRed 
                            text={translate('user_page.update')} 
                            className={'!w-[100%] !bg-red-900 !text-white !rounded-[40px] !h-[40px]'}
                            disabled={!valueDiffersFromLast} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}