import Button, { type ButtonProps } from '@mui/material/Button';

interface ButtonType extends ButtonProps {
    btnText: string
}

export const DefaultOutlinedBtn = ( {btnText, ...rest} : ButtonType ) => {

    return (
        <div>
            <Button variant="outlined" className={'!border-gray-500 hover:!border-gray-200 !text-gray-500 !rounded-full !h-12 !min-w-45 !mx-10'} {...rest}>
                {btnText}
            </Button>
        </div>
    )
}