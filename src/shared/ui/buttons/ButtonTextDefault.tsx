import { Button } from "@mui/material";

export const ButtonTextDefault = ( { text, ...rest } ) => {
    return (
        <Button
        variant="text"
        className={'!text-white !rounded-[40px] !w-[220px] !h-[40px]'}
        {...rest}>
        {text}
        </Button>
    )
}