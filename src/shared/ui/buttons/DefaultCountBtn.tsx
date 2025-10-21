import Button, { type ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Badge, { badgeClasses } from '@mui/material/Badge';

interface ButtonType extends ButtonProps {
    btnText: string,
    counter: number
}

const BtnBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: 1px;
    right: 110px;
  }
`;

export const DefaultCountBtn = ( {btnText, counter, ...rest} : ButtonType ) => {

    return (
        <div>
            <Button variant="contained" className={'!border-gray-500 hover:!border-gray-200 !text-gray-500 !rounded-full !h-12 !min-w-45 !bg-red-900 hover:!bg-red-800 !text-white !mr-20'} {...rest}>
                {btnText}
            </Button>
            <BtnBadge badgeContent={counter} color="warning" overlap="circular" />
        </div>
    )
}