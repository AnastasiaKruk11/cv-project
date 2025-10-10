import TextField, { type StandardTextFieldProps } from '@mui/material/TextField';

interface InputOutlinedProps extends StandardTextFieldProps {
    labelText: string;
}

export const InputOutlined = ({ labelText, value, ...rest }: InputOutlinedProps) => {
    return (
        <TextField variant="outlined" margin="dense" label={labelText} value={value}
       /* InputLabelProps={{
            shrink: !value //проверяй на фолси /труси
        }}*/
        sx={{
            minWidth: 410,
            '& input:-webkit-autofill': {
                transition: 'background-color 600000s 0s, color 600000s 0s',
            },
            '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '1px solid gray',
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