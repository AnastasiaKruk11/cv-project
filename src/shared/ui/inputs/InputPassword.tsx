import React from "react";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { type StandardTextFieldProps } from '@mui/material/TextField';

interface InputPasswordProps extends StandardTextFieldProps {
    labelText: string;
}

export const InputPassword = ( { labelText, ...rest }: InputPasswordProps ) => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div>
        <FormControl sx={{ width: '100%', mt: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password"
          sx={{
            color: 'white',
            opacity: .5,
            '&.Mui-focused': {
                color: 'white',
                opacity: 1
            },
          }}
          {...rest}>{labelText}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            sx={{ 
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
                'input': {
                    color: 'white',
                    '&::selection': {
                    backgroundColor: 'gray',
                    }
                }
             }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton className={'!text-white'}
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={labelText}
            {...rest}
        />
        </FormControl>
        </div>
    )
}