import { SideButton } from "../buttons/SideButton";
import { useTranslation } from "react-i18next";
import Avatar from '@mui/material/Avatar';
import { useParams } from "react-router";
import { useNavigate, generatePath } from 'react-router-dom';

interface SidebarPropsType {
    userAvatar: string,
    userName: string
}

export const Sidebar = ( {userAvatar, userName} : SidebarPropsType ) => {

    const { t: translate } = useTranslation();
    const {id: userId} = useParams();
    const navigate = useNavigate();

    return (
        <div className={'flex flex-col justify-between h-full min-h-screen min-w-50'}>
            <div className={'flex flex-col mt-[40px]'}>
                <SideButton text={translate('user_page.employees')} src={'/employees.png'} />
                <SideButton text={translate('user_page.skills')} src={'/skills.png'} onClick={() => navigate(generatePath('/user/:id/skills', {id: userId as string}))} />
                <SideButton text={translate('user_page.languages')} src={'/languages.png'} onClick={() => navigate(generatePath('/user/:id/languages', {id: userId as string}))} />
                <SideButton text={translate('user_page.cvs')} src={'/cvs.png'} />
            </div>
            <div className={'flex flex-col mb-[30px] fixed left-0 bottom-0'}>
                <button className={'cursor-pointer flex items-center ml-[10px] mb-[10px]'}>
                    <div><Avatar 
                    className={'!bg-red-900'} 
                    alt={userName}
                    src={userAvatar}>
                        {userAvatar? null : userName.split('')[0]}
                        </Avatar>
                    </div>
                    <span className={'text-white ml-[10px]'}>{userName}</span>
                </button>
                <button className={'ml-[20px] mt-[5px] cursor-pointer'}><img src="/arrow.png"/></button>
            </div>
        </div>
    )
}