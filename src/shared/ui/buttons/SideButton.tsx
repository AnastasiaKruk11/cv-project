import Button, { type ButtonProps } from '@mui/material/Button';
interface ButtonType extends ButtonProps {
    text: string,
    src: string
}

export const SideButton = ( {text, src, ...rest}: ButtonType ) => {
    return (
        <div className={'w-[calc(100%/5)'}>
            <Button className={'!w-[100%] !h-[56px] !rounded-tr-full !rounded-br-full !text-white !flex'} {...rest}>
                <div className={'mx-[15px]'}><img src={src}/></div>
                <span className={'!mr-auto !normal-case'}>{text}</span>
            </Button>
        </div>
    )
}