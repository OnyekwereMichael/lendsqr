import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import sign_in_img from '../assets/sign_in.svg';
import Logo from '../assets/logo.svg';
import { createUser } from '../firebase/auth';
import { useNavigate } from 'react-router-dom';
import { SignUpValidation } from '../lib/validations';
import '../styles/loader.scss'


const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values: { email: string; password: string }, actions: any) => {
    const { setSubmitting, setErrors } = actions;
    try {
      await createUser(values.email, values.password);
      navigate('/home');
    } catch (error: any) {
      setErrors({ email: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className='lender-logo'/>
        </div>
        <img src={sign_in_img} alt="Signup Illustration" className="login-image" />
      </div>

      <div className="login-right">
        <h2>Welcome to Lendsqr</h2>
        <p>Create an account to get started.</p>

        <Formik
          initialValues={{ fullName: '', email: '', password: '' }}
          validationSchema={SignUpValidation}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }: { isSubmitting: boolean }) => (
            <Form className="login-form">
              <Field name="fullName" type="text" placeholder="Full Name" />
              <ErrorMessage name="fullName" component="div" className="error" />

              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />

              <div className="password-field">
                <Field name="password">
                  {({ field }: any) => (
                    <input
                      {...field}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                    />
                  )}
                </Field>
                <span className="show-password" onClick={togglePasswordVisibility}>
                  {showPassword ? 'HIDE' : 'SHOW'}
                </span>
              </div>
              <ErrorMessage name="password" component="div" className="error" />

              <button type="submit" className="login-button" disabled={isSubmitting}>
                {isSubmitting ? <div className="loader" />: 'Sign Up'}
              </button>
            </Form>
          )}
        </Formik>

        <p className="signup-link">
          Already have an account? <a href="/sign-in">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
