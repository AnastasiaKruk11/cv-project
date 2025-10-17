import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

type ButtonTextType = {
    btnText: string
}

export const DeleteButton = ( {btnText} : ButtonTextType ) => {

    return (
        <Button variant="text" className={'!text-red-600 !w-55 !mr-20'}>
            <DeleteIcon className={'!mr-3'} />{btnText}
        </Button>
    )
}