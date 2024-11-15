import React, { useState } from 'react';
import './InputField.css';
import openEyeICO from '../../assets/icons/view.png'
import closeEyeICO from '../../assets/icons/hide.png'

export default function InputField({
    label,
    type,
    name,
    value,
    onChange,
    required,
    errorMessage,
    showPasswordToggle = false
}) {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="sm-input-group">
            <label>
                {label}{required && <span className="sm-required">*</span>}
            </label>
            <div className="sm-input-wrapper">
                <input
                    type={showPasswordToggle && showPassword ? 'text' : type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
                {showPasswordToggle && (
                    <button
                        type="button"
                        className="sm-toggle-password"
                        onClick={handleTogglePassword}
                    >
                        {/* <span>eye</span> */}
                        <img
                            src={showPassword ? closeEyeICO : openEyeICO}
                            alt="toggle password visibility"
                        />
                    </button>
                )}
            </div>
            {errorMessage && <span className="sm-error">{errorMessage}</span>}
        </div>
    );
}
