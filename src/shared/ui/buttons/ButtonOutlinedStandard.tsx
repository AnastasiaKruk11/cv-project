import Button, { type ButtonProps } from '@mui/material/Button';
interface ButtonType extends ButtonProps {
    text: string
}

export const ButtonOutlinedStandard = ( {text, ...rest}: ButtonType ) => {
    return (
        <Button 
        variant="outlined"
        className={`!text-white !border-gray-500 hover:!border-gray-200 !rounded-[40px] !w-[220px] !h-[43px]`}
        {...rest}>
        {text}
        </Button>
    )
}