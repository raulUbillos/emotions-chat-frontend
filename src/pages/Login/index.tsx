import { useForm } from 'react-hook-form';
import {GoogleLogin} from '@react-oauth/google';
import FormData from './FormData';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import BorderLayout from '../../layouts/BorderLayout';

const Login = () => {
    const {register, setValue, handleSubmit, formState:{errors}} = useForm<FormData>();
    const onSubmit = handleSubmit((data:FormData) => console.log(data));

    return <div className='
        flex 
        flex-col
        justify-center
        items-center
        h-full
    '>
        <div className='
            w-2/4
            bg-gray-100
        '>
            <BorderLayout>
                <Form 
                    onSubmit={onSubmit}>
                    <Input 
                        placeholder='Username'
                        {...register('user')}/>
                    <Input 
                        type='password'
                        placeholder='Password'
                        {...register('password')}/>
                    <Button>
                            Iniciar sesion
                    </Button>
                    <GoogleLogin 
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </Form>
            </BorderLayout>
        </div>
    </div>
}

export default Login;