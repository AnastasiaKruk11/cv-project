import TextField, { type StandardTextFieldProps } from '@mui/material/TextField';

interface InputOutlinedProps extends StandardTextFieldProps {
    labelText: string;
}

export const InputOutlined = ({ labelText, ...rest }: InputOutlinedProps) => {
    return (
        <TextField variant="outlined" margin="dense" label={labelText}
        sx={{
            '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '1px solid grey',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderWidth: '1px',
                borderColor: 'white',
            },
            },
            '& label': {
                color: 'white',
                opacity: .5
            },
            '& label.Mui-focused': {
                color: 'white',
                opacity: 1
            },
            'input': {
                color: 'white',
                '&::selection': {
                backgroundColor: 'gray',
            },
            }
        }}
        {...rest}
        />
    )
}