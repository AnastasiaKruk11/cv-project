import Button, { type ButtonProps } from '@mui/material/Button';
interface ButtonType extends ButtonProps {
    text: string
}

export const ButtonTextDefault = ( { text, ...rest }: ButtonType ) => {
    return (
        <Button
        variant="text"
        className={'!text-white !rounded-[40px] !w-[220px] !h-[40px]'}
        {...rest}>
        {text}
        </Button>
    )
}