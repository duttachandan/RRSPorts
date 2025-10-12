import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ styles }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`primary-btn
      font-medium text-[18px] text-white 
      outline-none ${styles} rounded-[10px]`}
    >
      <span>Get Started</span>
    </button>
  );
};

export default Button;
