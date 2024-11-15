import React, {useState} from 'react'
import InputField from '../../components/InputField/InputField';
import { Link, useNavigate } from 'react-router-dom';
import './SignupPage.css'
import { registerUser } from '../../utils/services/api';

export default function SignupPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        cpassword: '',
    });

    const nav = useNavigate();

    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validation function
    const validateFields = () => {
        const newErrors = {};

        if (step === 1) {
            if (!formData.email) {
                newErrors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = 'Email is invalid';
            }
            if (!formData.password) {
                newErrors.password = 'Password is required';
            } else if (formData.password.length < 6) {
                newErrors.password = 'Password must be at least 6 characters long';
            }
            if (!formData.cpassword) {
                newErrors.cpassword = 'Confirm Password is required'
            } else if (formData.cpassword.length < 6) {
                newErrors.cpassword = 'Password must be at least 6 characters long';
            }

            if (formData.password !== formData.cpassword) {
                newErrors.cpassword = "Confirm password and password is not same"
            }
        }

        setErrors(newErrors);
        console.log("Reached here", console.log(newErrors), Object.keys(newErrors).length)
        return Object.keys(newErrors).length === 0;
    };


    const handleNextStep = (e) => {
        e.preventDefault();
        if (validateFields()) {
            console.log("Reached here")
            if (step === 1) {
                // Make API call to register and send OTP here
                registerUser(formData);
                nav('/login')
            } else if (step === 2) {
                // Verify OTP API call
            }
            setStep(step + 1);
            console.log("Reached here", step)
        }
    };

    return (
        <>
            <div id="signup-page">
                <div className="registration-container">
                    <h1 className='signup-page-form-title'><i style={{ color: "#7B68EE", fontSize: "1.5rem" }}>Register and Unlock Your Library</i></h1>
                    <form className={`form-step form-step-${step}`}>
                        {step === 1 && (
                            <>

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

                                <InputField
                                    label="Confirm Password"
                                    type="password"
                                    name="cpassword"
                                    value={formData.cpassword}
                                    onChange={handleChange}
                                    required={true}
                                    showPasswordToggle={true}
                                    errorMessage={errors.cpassword}
                                />
                            </>
                        )}

                        {step === 2 && (
                            <div className="congratulations">
                                <div className="success-checkmark">
                                    <div className="check-icon">
                                        <span className="icon-line line-tip"></span>
                                        <span className="icon-line line-long"></span>
                                        <div className="icon-circle"></div>
                                        <div className="icon-fix"></div>
                                    </div>
                                </div>
                                <h2>Congratulations, {formData.name}!</h2>
                                <p style={{ marginBottom: "20px" }}>Your account has been successfully created.</p>
                                <button className="btn-submit">
                                    Continue to Dashboard
                                </button>
                            </div>
                        )}

                        {step < 2 && (
                            <button className="btn-submit" onClick={handleNextStep}>
                                Register
                            </button>
                        )}
                    </form>

                    <div className="signup-terms-policy-msg">
                        <p>By signing up, you agree to the <Link>Terms and Conditions</Link> and <Link>Privacy Policy</Link> of Scan Me.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
