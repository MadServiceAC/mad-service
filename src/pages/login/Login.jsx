import React from 'react';
import AuthCard from '../../components/cards/authcard/AuthCard';
import authbg from '../../assets/images/authbg.png'

const Login = () => {

  return (
    <div className="bg-cover min-h-screen min-w-screen flex items-center" style={{
      backgroundImage: `url(${authbg})`
    }}>
      <AuthCard isRegister={false} />
    </div>
  );
};

export default Login;