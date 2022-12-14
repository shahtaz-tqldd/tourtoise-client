import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { MdLock, MdEmail } from 'react-icons/md'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'

import useTitle from '../../hooks/useTitle'
import GoogleLogin from './GoogleLogin'
import { BiError } from 'react-icons/bi'

const Login = () => {
  useTitle('Login')
  const { emailLogin, forgotPassword } = useContext(AuthContext)
  const [userEmail, setUserEmail] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = data => {
    const { email, password } = data
    emailLogin(email, password)
      .then(() => {
        toast.success('Login successful!')
        navigate(from, { replace: true })
      })
      .catch(err => console.error(err))
  }

  const handleUserEmail = e => {
    const userEmailForm = e.target.value
    setUserEmail(userEmailForm)
  }

  const handleForgotPassword = () => {
    forgotPassword(userEmail)
      .then(() => {
        toast.success("Please check your email")
      })
      .catch(err => console.error(err))
  }

  return (
    <section className='lg:max-w-[1250px] mx-auto px-5 flex justify-center'>
      <div className='bg-white rounded-lg mt-20 p-6 border-t-4 border-success'>
        <h2 className='text-2xl font-bold mb-5 w-[320px]'>Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>

          <span onBlur={handleUserEmail} className='flex items-center mb-2'><MdEmail className='text-2xl mr-2' />
            <input {...register("email", { required: "Please provide your Email" })} type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs rounded-full bg-[#fff6e7] focus:outline-none focus:bg-[#cdfffb]" />
          </span>
          {errors.email && <span className='text-error flex items-center gap-1'><BiError />{errors.email.message}</span>}

          <span className='flex items-center mb-2'><MdLock className='text-2xl mr-2' />
            <input {...register("password", { required: "Please provide a strong password" })} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs rounded-full bg-[#fff6e7] focus:outline-none focus:bg-[#cdfffb]" />
          </span>
          {errors.password && <span className='text-error flex items-center gap-1'><BiError />{errors.password.message}</span>}

          <button onClick={handleForgotPassword} className='text-sm'>Forgot Password?</button>
          <input type="submit" value="Login" className="btn btn-success w-full rounded-md mt-4 mb-3" />
        </form>

        <div className="divider">OR</div>
        <GoogleLogin />
        <p className='font-bold'>Don't have any Account? <Link to='/sign-up' className='text-success'>Sign Up</Link></p>
      </div>
    </section>
  )
}

export default Login