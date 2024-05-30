import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCard = ({ isRegister }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6">
        {isRegister ? 'Create Account' : 'Log In'}
      </h2>
      <button
        onClick={() => navigate('/')}
        className="text-blue-600 hover:underline"
      >
        &larr; Back
      </button>
      <form>
        {/* Your form fields here */}
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md w-full mt-4">
          {isRegister ? 'Create Account' : 'Log In'}
        </button>
      </form>
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
  );
};

export default AuthCard;
