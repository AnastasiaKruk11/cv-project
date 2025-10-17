import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

type ButtonTextType = {
    btnText: string
}

export const AddButton = ( {btnText} : ButtonTextType ) => {

    return (
        <Button variant="text" className={'!text-gray-400 !w-55 !mx-10'}>
            <AddIcon className={'!mr-3'} />{btnText}
        </Button>
    )
}