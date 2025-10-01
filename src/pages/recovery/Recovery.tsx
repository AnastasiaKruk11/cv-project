import { ButtonContainedRed } from "../../shared/ui/buttons/ButtonContainedRed";
import { InputOutlined } from "../../shared/ui/inputs/InputOutlined";
import { ButtonTextDefault } from "../../shared/ui/buttons/ButtonTextDefault";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

export const Recovery = () => {

    const { t: translate } = useTranslation();

    const navigate = useNavigate();
    const handleClick = (route: string) => {
        navigate(route);
    }

    return (
        <div className={'flex flex-col w-full items-center'}>
            <div className={'text-white flex flex-col mt-35 text-center'}>
                <span className={'text-[34px]'}>{translate('recover_page.forgot')}</span>
                <span className={'inline-block mt-[26px] mb-[40px]'}>{translate('recover_page.instructions')}</span>
            </div>
            <div className={'flex flex-col w-[560px] mb-[50px]'}>
                <InputOutlined labelText={translate('login_page.email')} />
            </div>
            <div className={'flex flex-col justify-center'}>
                <div className={'mb-[8px]'}><ButtonContainedRed text={translate('recover_page.reset')} /></div>
                <ButtonTextDefault text={translate('recover_page.cancel')} onClick={() => handleClick('/')} />
            </div>
        </div>            
    )
}