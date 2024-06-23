import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import authbg from "../../assets/images/authbg.png"
import authleft from "../../assets/images/auth-left.png"
import logo from "../../assets/images/logo.png"
import AuthService from "../../svc/auth.svc"

const validationSchema = Yup.object({
  username: Yup.string().required('Mohon isi bagian ini!'),
  password: Yup.string().required('Mohon isi bagian ini!'),
})

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (values) => {
    setLoading(true)

    try {
      await AuthService.login(values.username, values.password)
      navigate('/')
      window.location.reload()
    } catch (error) {
      const resMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      setMessage(resMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-cover min-h-screen min-w-screen flex items-center" style={{backgroundImage: `url(${authbg})`}}>
      <div className="bg-white shadow-md rounded-2xl md:grid grid-cols-2 w-1/2 mx-auto">
        <div className="-p-6 hidden lg:block"> 
          <img src={authleft} alt="auth banner" className="w-72 rounded-tl-2xl rounded-bl-2xl" />
        </div>

        <div className="lg:-ml-12 p-6">
          <div className='flex justify-between mb-6'>
            <button onClick={() => navigate('/')} className="text-blue-600 hover:underline">
            <svg className='h-6 w-6' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path fill="#000000" fillRule="evenodd" d="M4.297105,3.29289 L0.59,7 L4.297105,10.7071 C4.687635,11.0976 5.320795,11.0976 5.711315,10.7071 C6.101845,10.3166 6.101845,9.68342 5.711315,9.29289 L4.418425,8 L11.504215,8 C12.332615,8 13.004215,8.67157 13.004215,9.5 C13.004215,10.3284 12.332615,11 11.504215,11 L10.004215,11 C9.451935,11 9.004215,11.4477 9.004215,12 C9.004215,12.5523 9.451935,13 10.004215,13 L11.504215,13 C13.437215,13 15.004215,11.433 15.004215,9.5 C15.004215,7.567 13.437215,6 11.504215,6 L4.418425,6 L5.711315,4.70711 C6.101845,4.31658 6.101845,3.68342 5.711315,3.29289 C5.320795,2.90237 4.687635,2.90237 4.297105,3.29289 Z"/>
            </svg>
            </button>
            <img src={logo} alt='madservice' className='w-36'/>
          </div>
          <h2 className="text-2xl font-bold">Welcome</h2>
          <p className="mb-6">Login to your account to continue</p>

          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-4">
                <Field type="text" name="username" placeholder="Username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                <ErrorMessage name="username" component="div" className="text-xs text-red-600" />
              </div>

              <div className="mb-4">
                <Field type="password" name="password" placeholder="Password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                <ErrorMessage name="password" component="div" className="text-xs text-red-600" />
              </div>

              {message && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  {message}
                </div>
              )}

              <button type="submit" className="hover:bg-cyan-800 bg-blue-600 text-white py-2 px-4 rounded-md shadow-md w-full mt-4" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                Log in
              </button>
            </Form>
          </Formik>

          <p className="mt-4 text-center">
            Don't have an account?
            <button onClick={() => navigate('/register')} className="text-blue-600 hover:underline ml-1">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
