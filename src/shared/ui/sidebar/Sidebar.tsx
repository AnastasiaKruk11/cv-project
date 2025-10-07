import { SideButton } from "../buttons/SideButton";
import { useTranslation } from "react-i18next";
import Avatar from '@mui/material/Avatar';

export const Sidebar = ( {userAvatar, userName} ) => {

    const { t: translate } = useTranslation();

    return (
        <div className={'flex flex-col justify-between h-full w-[calc(100%/5)]'}>
            <div className={'flex flex-col mt-[40px]'}>
                <SideButton text={translate('user_page.employees')} src={'/employees.png'} />
                <SideButton text={translate('user_page.skills')} src={'/skills.png'} />
                <SideButton text={translate('user_page.languages')} src={'/languages.png'} />
                <SideButton text={translate('user_page.cvs')} src={'/cvs.png'} />
            </div>
            <div className={'flex flex-col mb-[30px]'}>
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