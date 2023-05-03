import { Field } from 'formik';

const MyField = ({title, type, name, errors, touched}) => {
    return (
        <div className='form__block'>
            <label htmlFor={name}>{ title }:</label>
            <Field className="form__inp" type={type} id={name} name={name} />
            {
                errors[name] && touched[name] ? (<div className='form__error'>{errors[name]}</div>) : null
            }
        </div>
    );
};

export default MyField