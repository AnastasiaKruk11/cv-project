import Button from '@mui/material/Button';

export const ButtonContainedRed = ( {text, ...rest} ) => {
    return (
        <Button 
        variant="contained"
        className={`!bg-red-900 !text-white !rounded-[40px] !w-[220px] !h-[40px]`}
        {...rest}>
        {text}
        </Button>
    )
}