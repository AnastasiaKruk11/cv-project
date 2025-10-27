import { ButtonContainedRed } from "../../shared/ui/buttons/ButtonContainedRed";
import { ButtonTextRed } from "../../shared/ui/buttons/ButtonTextRed";
import { InputOutlined } from "../../shared/ui/inputs/InputOutlined";
import { InputPassword } from "../../shared/ui/inputs/InputPassword";
import { ButtonTextDefault } from "../../shared/ui/buttons/ButtonTextDefault";
import { useTranslation } from "react-i18next";
import { useNavigate, generatePath } from 'react-router-dom';
import { useState } from "react";
import { SIGN_UP } from "../../shared/api/mutations/mutations";
import { useMutation, type DefaultError } from '@tanstack/react-query';
import { useAuthStore } from "../../shared/store/authStore";
import type { AuthInput, Mutation } from '../../graphql/graphql';

export const Register = () => {

    const { t: translate } = useTranslation();

    const {setAuth} = useAuthStore();

    const navigate = useNavigate();
    const handleClick = (route: string) => {
        navigate(route);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    type SignUpQueryType = Pick<Mutation, 'signup'>;

    const mutation = useMutation<SignUpQueryType, DefaultError, AuthInput>({
        mutationFn: ({ email, password }: AuthInput) => SIGN_UP( email, password ),
        onSuccess: (data) => {
            setAuth({
                token: data.signup.access_token,
                user: data.signup.user,
            });
            navigate(generatePath('/user/:id', {id: data.signup.user.id}));
        },
        onError: (error) => {
            console.error('Error:', error);
        },
    });

    const handleSignup = () => {
        mutation.mutate({ email, password });
    };

    return (
        <div className={'flex flex-col w-full items-center h-screen'}>
            <div className={'flex justify-center items-center h-[90px]'}>
                <ButtonTextRed text={translate('login_page.log_in')} onClick={() => handleClick('/')} />
                <ButtonTextRed text={translate('login_page.sign_up')} className={'!border-b-1 !text-red-700 !rounded-[0px] !w-[120px] !h-[40px]'} />
            </div>
            <div className={'text-white flex flex-col mt-23 text-center'}>
                <span className={'text-[34px]'}>{translate('sign_up_page.register')}</span>
                <span className={'inline-block mt-[26px] mb-[40px]'}>{translate('sign_up_page.greeting')}</span>
            </div>
            <form>
                <div className={'flex flex-col w-[560px] mb-[50px]'}>
                    <InputOutlined 
                    labelText={translate('login_page.email')}
                    onChange={event => setEmail(event.target.value)}
                    value={email} />

                    <InputPassword 
                    labelText={translate('login_page.password')}
                    onChange={event => setPassword(event.target.value)}
                    value={password} />
                </div>
                <div className={'flex flex-col items-center'}>
                    <div className={'mb-[8px]'}><ButtonContainedRed text={translate('sign_up_page.create')} onClick={handleSignup} /></div>
                    <ButtonTextDefault text={translate('sign_up_page.existing_account')} onClick={() => handleClick('/')} />
                </div>
            </form>
        </div>            
    )
}