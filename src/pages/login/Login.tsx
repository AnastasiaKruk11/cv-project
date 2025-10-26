import { ButtonContainedRed } from "../../shared/ui/buttons/ButtonContainedRed";
import { ButtonTextRed } from "../../shared/ui/buttons/ButtonTextRed";
import { InputOutlined } from "../../shared/ui/inputs/InputOutlined";
import { InputPassword } from "../../shared/ui/inputs/InputPassword";
import { ButtonTextDefault } from "../../shared/ui/buttons/ButtonTextDefault";
import { useTranslation } from "react-i18next";
import { useNavigate, generatePath } from 'react-router-dom';
import { useState } from "react";
import { LOG_IN } from "../../shared/api/queries/queries";
import { useMutation, type DefaultError } from '@tanstack/react-query';
import { useAuthStore } from "../../shared/store/authStore";
import type { AuthInput, Query } from "../../graphql/graphql";

export const Login = () => {

    const { t: translate } = useTranslation();

    const setAuth = useAuthStore((state) => state.setAuth);

    const navigate = useNavigate();
    const handleClick = (route: string) => {
        navigate(route);
    }

    const [email, setUserEmail] = useState('');
    const [password, setPassword] = useState('');

    type LoginQueryType = Pick<Query, 'login'>

    const mutation = useMutation<LoginQueryType, DefaultError, AuthInput>({
        mutationFn: ({ email, password }) => LOG_IN( email, password ),
        onSuccess: (data) => {
            setAuth({
                token: data.login.access_token,
                user: data.login.user,
            });
            navigate(generatePath('/user/:id', {id: data.login.user.id}));
        },
        onError: (error) => {
            console.error('Error:', error);
        },
    });

    const handleLogin = () => {
        mutation.mutate({ email, password });
    };

    return (
        <div className={'flex flex-col w-full items-center h-screen'}>
            <div className={'flex justify-center items-center h-[90px]'}>
                <ButtonTextRed text={translate('login_page.log_in')} className={'!border-b-1 !text-red-700 !rounded-[0px] !w-[120px] !h-[40px]'} />
                <ButtonTextRed text={translate('login_page.sign_up')} onClick={() => handleClick('/register')} />
            </div>
            <div className={'text-white flex flex-col mt-23 text-center'}>
                <span className={'text-[34px]'}>{translate('login_page.welcome')}</span>
                <span className={'inline-block mt-[26px] mb-[40px]'}>{translate('login_page.greeting')} {translate('login_page.login_ask')}</span>
            </div>
            <form>
                <div className={'flex flex-col w-[560px] mb-[50px]'}>

                    <InputOutlined 
                    labelText={translate('login_page.email')}
                    onChange={event => setUserEmail(event.target.value)}
                    value={email} />

                    <InputPassword 
                    labelText={translate('login_page.password')}
                    onChange={event => setPassword(event.target.value)}
                    value={password} />

                </div>
                <div className={'flex flex-col items-center'}>
                    <div className={'mb-[8px]'}><ButtonContainedRed text={translate('login_page.log_in')} onClick={handleLogin} /></div>
                    <ButtonTextDefault text={translate('login_page.forgot_pass')} onClick={() => handleClick('/recovery')} />
                </div>
            </form>      
        </div>
    )
}