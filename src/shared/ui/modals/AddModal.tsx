import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { SelectOutlined } from '../selects/SelectOutlined';
import { useGetSkills } from '../../hooks/query-hooks';
import { ButtonContainedRed } from '../buttons/ButtonContainedRed';
import { ButtonOutlinedStandard } from '../buttons/ButtonOutlinedStandard';
import { Mastery } from '../../../graphql/graphql';

interface FormDataType {
    name: string,
    mastery: string
}
interface ModalPropsType {
    open: boolean,
    dialogTitle: string,
    onClose: () => void,
    onSubmit: (formData: FormDataType) => void,
    skillsToExclude: string[] | undefined
}

const skillMasteries = Object.values(Mastery).map((v) => ({id: v, name: v}));

export const AddModal = ({ open, dialogTitle, onClose, onSubmit, skillsToExclude } : ModalPropsType) => {

    const { data: skillsData } = useGetSkills();

    const [formData, setFormData] = useState({
        name: '',
        mastery: ''
    });

    useEffect(() => {
        if (open) {
        setFormData({ name: '', mastery: '' });
        }
    }, [open]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value
        });
    };
    const handleSubmit = () => {
        onSubmit(formData);
    };

    const items = skillsData?.skills.map(({name}) => ({id: name, name}));
    const filteredItems = items?.filter(item => !skillsToExclude?.includes(item.name));

    return (
        <Dialog 
        open={open} 
        onClose={onClose} 
        fullWidth 
        maxWidth="sm"
        PaperProps={{
            sx: {
            backgroundColor: '#595757',
            color: '#fff',
            },
        }}
        >
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
            <SelectOutlined
            fullWidth
            labelText="Skill"
            items={filteredItems}
            onChange={handleChange}
            className={'mb-3'}
            name="name"
            />
            <SelectOutlined
            fullWidth
            labelText="Mastery"
            items={skillMasteries}
            onChange={handleChange}
            name="mastery"
            />
        </DialogContent>
        <DialogActions>
            <ButtonOutlinedStandard text='Cancel' onClick={onClose} />
            <ButtonContainedRed text='Confirm' onClick={handleSubmit} />
        </DialogActions>
        </Dialog>
    );
}