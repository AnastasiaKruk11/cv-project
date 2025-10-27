import { Sidebar } from "../../shared/ui/sidebar/Sidebar";
import { Header } from "../../shared/ui/header/Header";
import { useParams } from "react-router";
import { ButtonTextRed } from "../../shared/ui/buttons/ButtonTextRed";
import { InputOutlined } from "../../shared/ui/inputs/InputOutlined";
import { SelectOutlined } from "../../shared/ui/selects/SelectOutlined";
import { ButtonContainedRed } from "../../shared/ui/buttons/ButtonContainedRed";
import Avatar from '@mui/material/Avatar';
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useGetUser, useGetPositions, useGetDepartments } from "../../shared/hooks/query-hooks";
import { useMutateUserData, useMutateAvatarUpload, useMutateAvatarDelete } from "../../shared/hooks/mutation-hooks";
import { useForm } from 'react-hook-form';
import { useRef } from "react";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, generatePath } from 'react-router-dom';

export const User = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const { data } = useGetUser(id);
    const { data: departmentData } = useGetDepartments();
    const { data: positionData } = useGetPositions();

    const { t: translate } = useTranslation();

    const { register, handleSubmit, watch } = useForm();
    const {mutate} = useMutateUserData();
    const { mutate: mutateAvatar } = useMutateAvatarUpload();
    const { mutate: deleteAvatar } = useMutateAvatarDelete();
    const {firstName, lastName, department, position} = watch();

    const { cvs, role } = data?.user || {};
    const cvIds = cvs?.map((item) => item.id) || [];
    const userId = data?.user.id || '';

    const fileInputRef = useRef<HTMLInputElement>(null);

    const avatarBrowse = (event: React.ChangeEvent<HTMLInputElement>) => {
        if( event.target.files?.length) {
            const file = event.target.files[0];
            const size = file.size;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => mutateAvatar({userId, base64: reader.result as string, size, type: file.type}) 
        }
    }

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const valueDiffersFromLast = firstName !== data?.user.profile.first_name || 
                                 lastName !== data?.user.profile.last_name ||
                                 department !== data?.user.department?.id ||
                                 position !== data?.user.position?.id;

    /*useEffect(() => {
        if(data){
    setValue("firstName", data?.user.profile.first_name)
    setValue("department", data?.user.department?.id)
    setValue("lastName", data?.user.profile.last_name)
    setValue("position", data?.user.position?.id)
        }
    }, [data, setValue])*/

    return (
        <div className={'h-full w-full flex'}>
            <Sidebar userAvatar={data?.user.profile.avatar} userName={`${data?.user.profile.first_name} ${data?.user.profile.last_name}`} />
            <div className={'w-full'}>
                <Header firstName={data?.user.profile.first_name as string} lastName={data?.user.profile.last_name as string} ifTailSection={false} tailSectionText={''} />
                <div>
                    <ButtonTextRed text={translate('user_page.profile')} className={'!border-b-1 !text-red-700 !rounded-[0px] !w-[120px] !h-[40px]'} />
                    <ButtonTextRed text={translate('user_page.skills')} onClick={() => navigate(generatePath('/user/:id/skills', {id: userId}))} />
                    <ButtonTextRed text={translate('user_page.languages')} onClick={() => navigate(generatePath('/user/:id/languages', {id: userId}))} />
                </div>
                <div className={'flex flex-col w-full justify-center items-center'}>
                    <div className={'flex justify-center items-center w-[100%]'}>
                        <div className={'m-[30px]'}>{data
                        ? <Avatar alt={`${data.user.profile.first_name}`} src={`${data.user.profile.avatar}`} className={'!w-[120px] !h-[120px]'} />
                        : null}
                        </div>
                        <IconButton className={'relative bottom-13 right-8'} onClick={() => deleteAvatar({ userId })} aria-label="close" sx={{ color: 'gray' }}>
                            <CloseIcon />
                        </IconButton>
                        <div className={'text-white'}>
                            <div>
                                <input type="file" ref={fileInputRef} accept="image/jpeg, image/png, image/gif, image/svg+xml" className={'hidden'} onChange={avatarBrowse} />
                                <Button variant="text" onClick={handleClick}><img src="/download.png"/></Button>
                                <span className={'text-[20px] font-medium'}>{translate('user_page.avatar_upload')}</span>
                            </div>
                            <span className={'opacity-60'}>{translate('user_page.file_format')}</span>
                        </div>
                    </div>
                    <div className={'text-white flex flex-col items-center w-[100%]'}>
                        <span className={'text-[24px]'}>{`${data?.user.profile.first_name} ${data?.user.profile.last_name}`}</span>
                        <span className={'opacity-60 mt-[8px] mb-[3px]'}>{`${data?.user.email}`}</span>
                        <span>{translate('user_page.member_since')} {new Date(Number(data?.user.created_at)).toDateString()}</span>
                    </div>
                    
                    <form className={'flex flex-col mt-[40px] justify-around w-[100%] max-w-[900px]'} onSubmit={handleSubmit(() => mutate ({userId, cvsIds: cvIds, departmentId: department, positionId: position, role}))}>
                        <div className={'flex !mr-[25px] w-[100%]'}>
                            <div className={'!mb-[20px] !mr-[15px] w-[100%]'}>
                                <InputOutlined labelText={translate('user_page.first_name')} {...register("firstName")} name="firstName" type="text" />
                            </div>
                            <div className={'!mb-[20px] w-[100%]'}>
                                <InputOutlined labelText={translate('user_page.last_name')} {...register("lastName")} name="lastName" />
                            </div>
                        </div>
                        <div className={'flex w-[100%]'}>
                            <div className={'!mr-[15px] !mb-[20px] w-[100%]'}>
                                <SelectOutlined labelText={translate('user_page.department')} {...register("department")} name="department" items={departmentData?.departments} />
                            </div>
                            <div className={'w-[100%]'}>
                                <SelectOutlined labelText={translate('user_page.position')} {...register("position")} name="position" items={positionData?.positions} /> 
                            </div>  
                        </div>
                        <div className={'flex justify-end'}>
                            <ButtonContainedRed 
                            text={translate('user_page.update')} 
                            type="submit"
                            className={'!w-[50%] !bg-red-900 !text-white !rounded-[40px] !h-[40px] disabled:!bg-gray-600'}
                            disabled={!valueDiffersFromLast}
                            />
                        </div>
                    </form>    
                </div>
            </div>
        </div>
    )
}