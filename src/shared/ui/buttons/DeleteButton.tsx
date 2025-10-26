import { Button, type ButtonProps } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

interface ButtonTextType extends ButtonProps {
    btnText: string
}

export const DeleteButton: React.FC<ButtonTextType> = ( {btnText, ...rest} ) => {

    return (
        <Button variant="text" className={'!text-red-600 !w-55 !mr-20 !mb-10'} {...rest}>
            <DeleteIcon className={'!mr-3'} />{btnText}
        </Button>
    )
}