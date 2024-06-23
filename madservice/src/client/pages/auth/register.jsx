import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import authbg from "../../assets/images/authbg.png"
import authleft from "../../assets/images/auth-left.png"
import logo from "../../assets/images/logo.png"
import AuthService from "../../svc/auth.svc"


const validationSchema = Yup.object({
  username: Yup.string()
    .required('Mohon isi bagian ini!')
    .min(3, 'Username harus 3-20 karakter.')
    .max(20, 'Username harus 3-20 karakter.'),
  email: Yup.string()
    .required('Mohon isi bagian ini!')
    .email('Bukan email yang valid.'),
  password: Yup.string()
    .required('Mohon isi bagian ini!')
    .min(6, 'Password harus 6-40 karakter.')
    .max(40, 'Password harus 6-40 karakter.')
})

const Register = () => {
  const navigate = useNavigate()
  const [successful, setSuccessful] = React.useState(false)
  const [message, setMessage] = React.useState('')

  const handleSubmit = async (values) => {
    try {
      const response = await AuthService.register(
        values.username,
        values.email,
        values.password
      )
      setMessage(response.data.message)
      setSuccessful(true)
    } catch (error) {
      const resMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      setMessage(resMessage)
      setSuccessful(false)
    }
  }

    return(
      <div className="bg-cover min-h-screen min-w-screen flex items-center" style={{backgroundImage: `url(${authbg})`}}>
        <div className="bg-white shadow-md rounded-2xl md:grid grid-cols-2 w-1/2 mx-auto">
      <div className="-p-6 hidden lg:block"> 
        <img src={authleft} alt="auth banner" className="w-72 rounded-tl-2xl rounded-bl-2xl" />
      </div>
      <div className="lg:-ml-12 p-6">
        <div className='flex justify-between mb-6'>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:underline"
          >
            <svg className='h-6 w-6' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path fill="#000000" fillRule="evenodd" d="M4.297105,3.29289 L0.59,7 L4.297105,10.7071 C4.687635,11.0976 5.320795,11.0976 5.711315,10.7071 C6.101845,10.3166 6.101845,9.68342 5.711315,9.29289 L4.418425,8 L11.504215,8 C12.332615,8 13.004215,8.67157 13.004215,9.5 C13.004215,10.3284 12.332615,11 11.504215,11 L10.004215,11 C9.451935,11 9.004215,11.4477 9.004215,12 C9.004215,12.5523 9.451935,13 10.004215,13 L11.504215,13 C13.437215,13 15.004215,11.433 15.004215,9.5 C15.004215,7.567 13.437215,6 11.504215,6 L4.418425,6 L5.711315,4.70711 C6.101845,4.31658 6.101845,3.68342 5.711315,3.29289 C5.320795,2.90237 4.687635,2.90237 4.297105,3.29289 Z"/>
            </svg>
          </button>
          <img src={logo} alt='madservice' className='w-36'/>
        </div>
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>
        {/* <Form onSubmit={this.handleRegister} ref={c=>{this.form=c}}>
        {!this.state.successful && (
          <>
          <div className="relative z-0 w-full mb-5 group">  
            <Input type="text" name="username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={this.state.username} onChange={this.onChangeUsername} validations={[required, vusername]} />
            <label htmlFor="username" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Username
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">  
            <Input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={this.state.email} onChange={this.onChangeEmail} validations={[required, email]} />
            <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">  
            <Input type="password" name="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={this.state.password} onChange={this.onChangePassword} validations={[required, vpassword]} />
            <label htmlFor="password" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Password
            </label>
          </div>
          </>
        )}
          <button className="hover:bg-cyan-800 bg-blue-600 text-white py-2 px-4 rounded-md shadow-md w-full mt-4">
            Log in
          </button>
          {this.state.message && (
            <div className={`border px-4 py-3 rounded relative ${this.state.successful ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700'}`} role="alert">
            <span className="block sm:inline">{this.state.message}</span>
            </div>
          )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c
              }}
            />
        </Form> */}
        <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="relative z-0 w-full mb-5 group">
            <Field type="text" id="username" name="username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
            <label htmlFor="username" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Username
            </label>
            <ErrorMessage name="username" component="div" className="text-xs text-red-600" />
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <Field type="email" id="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
            <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Email
            </label>
            <ErrorMessage name="email" component="div" className="text-xs text-red-600" />
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <Field type="password" id="password" name="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
            <label htmlFor="password" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Password
            </label>
            <ErrorMessage name="password" component="div" className="text-xs text-red-600" />
          </div>

          <button type="submit" className="hover:bg-cyan-800 bg-blue-600 text-white py-2 px-4 rounded-md shadow-md w-full mt-4">
            Register
          </button>

          {message && (
            <div
              className={`message ${successful ? 'success' : 'error'}`}
              role="alert"
            >
              {message}
            </div>
          )}
        </Form>
      </Formik>
        <p className="mt-4 text-center">
          Already have an account?
          <button onClick={() => navigate('/login')} className="text-blue-600 hover:underline ml-1">
            Log In
          </button>
        </p>
      </div>
    </div>
       </div>
    )
}

export default Register