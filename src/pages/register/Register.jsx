import React from 'react';
import AuthCard from '../../components/cards/authcard/AuthCard';

const Register = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AuthCard isRegister={true} />
    </div>
  );
};

export default Register;