import './App.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import MyField from './components/MyField';

const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Имя слишком короткое').max(100, 'Введите менее 100 символов').required('Заполните поле'),
    mail: Yup.string().email('Введите правильный Email').required('Заполните поле'),
    pass: Yup.string().min(8, 'Пароль слишком короткий').matches(/[a-zA-Z0-9!@#~\s]/, 'Не соответствует правилу').required('Заполните поле'),
    pass2: Yup.string().oneOf([Yup.ref('pass')], 'Пароли не совпадают').required('Заполните поле')
});

const App = () => {

    const handleSubmit = (values) => {
        console.log(values)
    }
    return (
        <div>

            <Formik
                initialValues={{
                    name: "",
                    mail: "",
                    pass: "",
                    pass2: ""
                }}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}
            >
                {
                    ({ errors, touched }) => (
                        <Form className='form'>
                            <MyField title="Имя" type="text" name="name" errors={errors} touched={touched} />
                            <MyField title="Почта" type="email" name="mail" errors={errors} touched={touched} />
                            <MyField title="Пароль" type="password" name="pass" errors={errors} touched={touched} />
                            <MyField title="Подтвердите пароль" type="password" name="pass2" errors={errors} touched={touched} />
                            <button className='form__btn'>Зарегистрировать</button>
                        </Form>
                    )
                }
            </Formik>

        </div>
    );
}

export default App;


