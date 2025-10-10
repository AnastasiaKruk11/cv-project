import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";

export const SelectOutlined = ( {labelText, items, ...rest} ) => {
    return (
        <FormControl sx={{ minWidth: 410 }}>
            <InputLabel
                sx={{
                color: 'white',
                opacity: 0.5,
                '&.Mui-focused': {
                    color: 'white',
                    opacity: .5
                },
                }}
            >
                {labelText}
            </InputLabel>
            <Select label={labelText} variant="outlined"
                sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'gray',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderWidth: '1px',
                        borderColor: 'white',
                    },
                    '& .MuiSelect-select': {
                        color: 'white',
                    }
                }}
                
                {...rest}
            >
                {items?.map((item) => {
                    return (
                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}