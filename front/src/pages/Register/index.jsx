import Styled from './styles'
import { useForm } from 'react-hook-form'
import { login } from '../../misc/templates'
import { useMutation } from 'react-query'
import { auth } from '../../services'


function Register() {

    const {register, formState, handleSubmit } = useForm();

    const { mutate } = useMutation({
        mutationFn: auth.register,
        onSuccess: () => {}
    });

    const handleForm = (data) => {
        console.info('Form data: ', data)
        mutate(data)
    }

    const { errors } = login

    return (
        <Styled.Body>
            <h1>Sign up!</h1>
                <Styled.Form>
                    <form onSubmit={handleSubmit(handleForm)}>
                        <Styled.Field>
                            <label htmlFor='email'>email</label>
                            <input type="text" id='email' placeholder='example@example.com' {...register("email", {required: true})} />
                            <p>{formState.errors && errors[formState.errors?.email?.type]}</p>
                        </Styled.Field>
                        <Styled.Field>
                            <label>username</label>
                            <input type="text" id='username' placeholder='username' {...register("username", { required: true})} />
                            <p>{formState.errors && errors[formState.errors?.username?.type]}</p>
                        </Styled.Field>
                        <Styled.Field>
                            <label>password</label>
                            <input type="password" id='password' placeholder='length must be at least 4' {...register("password", {required: true, minLength: 4})} />
                            <p>{formState.errors && errors[formState.errors?.password?.type]}</p>
                        </Styled.Field>
                        <input type='submit' />
                    </form>
                </Styled.Form>
        </Styled.Body>
    )
}

export default Register