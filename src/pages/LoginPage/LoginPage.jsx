import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../../components/InputField/InputField';
import { loginUser } from '../../utils/services/api';
import { setID } from '../../utils/services/auth';
import './LoginPage.css'

export default function LoginPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    // Validation function
    const validateFields = () => {
      const newErrors = {};
  
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.password) {
        newErrors.password = 'Password is required';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleLogin = async (e) => {
      e.preventDefault();
      if (validateFields()) {
  
        // Make API call to login here
        try {
          const data = await loginUser(formData);
          if (data.userId) {
            setID(data.userId);  // Save access token
            navigate('/dashboard');
          }
        } catch (error) {
          console.error('Login failed:', error);
        }
        
  
        // navigate('/dashboard')
      }
    };
  
    return (
      <>
        <div id="login-page">
          <div className="login-container">
            <h1 style={{textAlign: "center"}}>ShelfSpace</h1>
            <p className='signup-page-form-title'><i style={{ color: "#7B68EE" }}>Welcome Back!</i></p>
            <form className={`form-step`}>
              <InputField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required={true}
                errorMessage={errors.email}
              />
  
              <InputField
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required={true}
                showPasswordToggle={true}
                errorMessage={errors.password}
              />
  
              <button className="btn-submit" onClick={handleLogin}>
                Login
              </button>
            </form>
  
            <div className="login-forget-pass-signup-link">
              <p>Don't have an account? <Link to={'/signup'}>Signup</Link></p>
            </div>
          </div>
        </div>
      </>
    )
}
