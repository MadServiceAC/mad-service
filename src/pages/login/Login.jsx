import React  from 'react';
import AuthCard from '../../components/cards/authcard/AuthCard';

function Login () {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AuthCard isRegister={false} />
    </div>
  );
};

export default Login;
