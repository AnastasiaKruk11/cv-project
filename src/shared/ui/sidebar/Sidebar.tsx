import { SideButton } from "../buttons/SideButton";
import { useTranslation } from "react-i18next";

export const Sidebar = ( {userAvatar, userName} ) => {

    const { t: translate } = useTranslation();

    return (
        <div className={'flex flex-col justify-between h-full w-[calc(100%/5)]'}>
            <div className={'flex flex-col mt-[30px]'}>
                <SideButton text={translate('user_page.employees')} src={'/employees.png'} />
                <SideButton text={translate('user_page.skills')} src={'/skills.png'} />
                <SideButton text={translate('user_page.languages')} src={'/languages.png'} />
                <SideButton text={translate('user_page.cvs')} src={'/cvs.png'} />
            </div>
            <div className={'flex flex-col mb-[30px]'}>
                <button>
                    <div>{userAvatar}</div>
                    <span>{userName}</span>
                </button>
                <button className={'ml-[20px] cursor-pointer'}><img src="/arrow.png"/></button>
            </div>
        </div>
    )
}