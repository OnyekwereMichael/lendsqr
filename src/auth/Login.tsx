import '../styles/login.scss'
import sign_in_img from '../assets/sign_in.svg'
import Logo from '../assets/logo.svg'
import { useState } from 'react';
import { signInUser} from '../firebase/auth';
import { useAuth } from '../lib/context/AuthContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LoginValidation } from '../lib/validations';
import '../styles/loader.scss'



const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      setError(null);
      await signInUser(values.email, values.password);
      // Optionally redirect the user
    } catch (err: any) {
      console.error(err.message);
      setError('Invalid email or password');
    }
  };

  if(isAuthenticated) {
    navigate('/');
  }

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo-container">
          <img src={Logo} alt="Logo" />
        </div>
        <img src={sign_in_img} alt="Login Illustration" className="login-image" />
      </div>

      <div className="login-right">
        <h2>Welcome!</h2>
        <p>Enter details to login.</p>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginValidation}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form className="login-form">
              <div>
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="password-field">
                <Field
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                />
                <span className="show-password" onClick={togglePasswordVisibility}>
                  {showPassword ? 'HIDE' : 'SHOW'}
                </span>
              </div>
              <ErrorMessage name="password" component="div" className="error" />

              {error && <div className="error">{error}</div>}

              <a href="#" className="forgot-password">Forgot Password?</a>

              <button type="submit" className="login-button" disabled={isSubmitting}>
                {isSubmitting ? <div className="loader" /> : 'Log In'}
              </button>
            </Form>
          )}
        </Formik>

        <p className="signup-link">
          Don't have an account? <a href="/sign-up">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
