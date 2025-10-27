import Button, { type ButtonProps } from '@mui/material/Button';

interface ButtonType extends ButtonProps {
    language: string,
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'Native',
}

export const LanguageCard = ( {language, level, ...rest} : ButtonType ) => {

    console.log(language, level)

    return (
        <Button className={'!w-[100%] !h-[56px] !rounded-full !rounded-br-full !text-white !flex'} {...rest}>
            <div className={'mr-5'}>{language}</div>
            <div>{level}</div>
        </Button>
    )
}