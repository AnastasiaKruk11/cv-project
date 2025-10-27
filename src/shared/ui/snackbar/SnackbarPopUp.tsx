import { Snackbar } from "@mui/material";

interface SnackbarPropsType {
    openSnackbar: boolean,
    text: string,
    onClose: () => void
}

export const SnackbarPopUp = ( {openSnackbar, text, onClose} : SnackbarPropsType ) => {

    return (
        <Snackbar
            open={openSnackbar}
            autoHideDuration={5000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            message={text}
            ContentProps={{sx: {
                backgroundColor: '#F5F5F5',
                color: 'black',
            },
            }}
        />
    )
}