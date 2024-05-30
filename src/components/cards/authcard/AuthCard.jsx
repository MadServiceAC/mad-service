import React from 'react';
import { useNavigate } from 'react-router-dom';
import authleft from '../../../assets/images/auth-left.png';
import Input from '../../../components/input/Input';
import logo from '../../../assets/images/logo.png'

const AuthCard = ({ isRegister }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-2xl grid grid-cols-2 w-1/2 mx-auto">
      <div className="-p-6">
        <img src={authleft} alt="auth banner" className="w-72 rounded-tl-2xl rounded-bl-2xl" />
      </div>
      <div className="-ml-12 py-4 pr-6">
      <div className='flex justify-between mb-6'>
      <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:underline"
        >
          <svg className='h-6 w-6' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" fill-rule="evenodd" d="M4.297105,3.29289 L0.59,7 L4.297105,10.7071 C4.687635,11.0976 5.320795,11.0976 5.711315,10.7071 C6.101845,10.3166 6.101845,9.68342 5.711315,9.29289 L4.418425,8 L11.504215,8 C12.332615,8 13.004215,8.67157 13.004215,9.5 C13.004215,10.3284 12.332615,11 11.504215,11 L10.004215,11 C9.451935,11 9.004215,11.4477 9.004215,12 C9.004215,12.5523 9.451935,13 10.004215,13 L11.504215,13 C13.437215,13 15.004215,11.433 15.004215,9.5 C15.004215,7.567 13.437215,6 11.504215,6 L4.418425,6 L5.711315,4.70711 C6.101845,4.31658 6.101845,3.68342 5.711315,3.29289 C5.320795,2.90237 4.687635,2.90237 4.297105,3.29289 Z"/>
          </svg>
        </button>
        <img src={logo} alt='madservice' className='w-36'/>
      </div>
        {isRegister? (
        <h2 className="text-2xl font-bold mb-6">
          Create Account
        </h2>
        ) : (
          <>
          <h2 className='text-2xl font-bold'>
            Welcome
          </h2>
          <p className='mb-6'>
            Login to your account to continue
          </p>
          </>
        )}
        
        <div>
          {isRegister ? (
            <>
              <Input
                type="text"
                id="floating_fullname"
                styleType="floating-label"
                placeholder="Full Name"
                required
              />
              <Input
                type="email"
                id="floating_email"
                styleType="floating-label"
                placeholder="Email address"
                required
              />
              <Input
                type="password"
                id="floating_password"
                styleType="floating-label"
                placeholder="Password"
                required
              />
            </>
          ) : (
            <>
              <Input
                type="email"
                id="floating_email"
                styleType="floating-label"
                placeholder="Email address"
                required
              />
              <Input
                type="password"
                id="floating_password"
                styleType="floating-label"
                placeholder="Password"
                required
              />
            </>
          )}
          <button className="hover:bg-cyan-800 bg-blue-600 text-white py-2 px-4 rounded-md shadow-md w-full mt-4">
            {isRegister ? 'Create Account' : 'Log In'}
          </button>
        </div>
        <p className="mt-4 text-center">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}
          <button
            onClick={() => navigate(isRegister ? '/login' : '/register')}
            className="text-blue-600 hover:underline ml-1"
          >
            {isRegister ? 'Log In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthCard;
