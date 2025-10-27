import { useTranslation } from "react-i18next";

type NameType = {
    firstName: string,
    lastName: string
    ifTailSection: boolean,
    tailSectionText: string
}

export const Header = ( { firstName, lastName, ifTailSection, tailSectionText } : NameType ) => {

    const { t: translate } = useTranslation();

    return (
        <div className={'flex my-[15px] w-full'}>
            <span className={'text-white'}>{translate('user_page.employees')}</span>
            <div className={'p-[8px]'}><img src='/arrow-right.png'/></div>
            <div className={'p-[4px] mr-[8px]'}><img src='/user.png'/></div>
            <span className={'text-red-800'}>{`${firstName} ${lastName}`}</span>
            {ifTailSection && 
                <>
                    <div className={'p-[8px]'}><img src='/arrow-right.png'/></div>
                    <span className={'text-gray-400'}>{translate(`${tailSectionText}`)}</span>
                </>
            }
        </div>
    )
}