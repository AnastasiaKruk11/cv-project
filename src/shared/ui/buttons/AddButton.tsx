import Button, { type ButtonProps } from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

interface ButtonTextType extends ButtonProps {
    btnText: string
}

export const AddButton = ( {btnText, ...rest} : ButtonTextType ) => {

    return (
        <Button variant="text" className={'!text-gray-400 !w-55 !mx-10 !mb-10'} {...rest}>
            <AddIcon className={'!mr-3'} />{btnText}
        </Button>
    )
}