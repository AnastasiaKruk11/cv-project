import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { SelectOutlined } from '../selects/SelectOutlined';
import { useGetSkills } from '../../hooks/query-hooks';
import { ButtonContainedRed } from '../buttons/ButtonContainedRed';
import { ButtonOutlinedStandard } from '../buttons/ButtonOutlinedStandard';

interface ModalPropsType {
    open: boolean,
    dialogTitle: string,
    onClose: () => void,
    onSubmit: () => void
}

const skillMasteries = [{id: 1, name: 'Novice'}, {id: 2, name: 'Advanced'}, {id: 3, name: 'Competent'}, {id: 4, name: 'Proficient'}, {id: 5, name: 'Expert'}]; 

export const AddModal = ({ open, dialogTitle, onClose, onSubmit } : ModalPropsType) => {

    const { data: skillsData } = useGetSkills();

    const [formData, setFormData] = useState({
        username: '',
        email: ''
    });

    useEffect(() => {
        if (open) {
        setFormData({ username: '', email: '' });
        }
    }, [open]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value
        });
    };

    const handleSubmit = () => {
        onSubmit();
    };

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
            items={skillsData?.skills}
            onChange={handleChange}
            className={'mb-3'}
            />
            <SelectOutlined
            fullWidth
            labelText="Mastery"
            items={skillMasteries}
            onChange={handleChange}
            />
        </DialogContent>
        <DialogActions>
            <ButtonOutlinedStandard text='Cancel' onClick={onClose} />
            <ButtonContainedRed text='Confirm' onClick={handleSubmit} />
        </DialogActions>
        </Dialog>
    );
}