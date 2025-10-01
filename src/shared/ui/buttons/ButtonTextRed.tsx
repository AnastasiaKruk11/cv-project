import { Button } from "@mui/material";

export const ButtonTextRed = ( {text, ...rest} ) => {
    return (
        <Button 
        variant="text"
        className={`!text-white focus:!text-red-700 !rounded-[0px] !w-[120px] !h-[40px] focus:!border-b-1`}
        {...rest}>
        {text}
        </Button>
    )
}