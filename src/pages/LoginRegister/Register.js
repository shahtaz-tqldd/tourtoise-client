import React, { useContext, useState } from 'react'
import { MdLock, MdEmail, MdPhotoCamera } from 'react-icons/md'
import { HiUser } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import GoogleLogin from './GoogleLogin'
import './style.css'
import useTitle from '../../hooks/useTitle'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../context/AuthProvider'
import { toast } from 'react-hot-toast'
import { BiError } from 'react-icons/bi'


const Register = () => {
  useTitle('Register')
  const { emailRegister, updateUser } = useContext(AuthContext)
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const imgHostKey = process.env.REACT_APP_imgbb_key
  const handleRegister = (data) => {
    const { name, email, password, password2 } = data

    const image = data.img[0]
    const formData = new FormData()
    formData.append('image', image)

    fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(imgData => {
        if (imgData.success) {
          const photoURL = imgData.data.url;
          const userInfo = {
            displayName: name,
            photoURL
          }
          if (password !== password2) {
            setErrorMsg("password didn't match")
          }
          else {
            emailRegister(email, password)
              .then(() => {
                updateUser(userInfo)
                  .then(() => {
                    toast.success("Account created successfully")
                    navigate('/')
                  })
                  .catch(err => console.error(err))

              })
              .catch(err => console.error(err))
          }
        }
      })

  }

  return (
    <section className='lg:max-w-[1250px] mx-auto px-5 flex justify-center'>
      <div className='bg-white rounded-lg my-10 p-6 border-t-4 border-secondary'>
        <h2 className='text-2xl font-bold mb-5'>Open a New Account</h2>

        <form onSubmit={handleSubmit(handleRegister)}>

          <span className='flex items-center mb-2'><HiUser className='text-2xl mr-2' />
            <input {...register("name", { required: "Please provide your name" })} type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs rounded-full bg-[#fff6e7] focus:outline-none focus:bg-[#cdfffb]" />
          </span>
          {errors.name && <span className='text-error flex items-center gap-1'><BiError />{errors.name.message}</span>}

          <span className='flex items-center mb-2'><MdEmail className='text-2xl mr-2' />
            <input {...register("email", { required: "Please provide your Email" })} type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs rounded-full bg-[#fff6e7] focus:outline-none focus:bg-[#cdfffb]" />
          </span>
          {errors.email && <span className='text-error flex items-center gap-1'><BiError />{errors.email.message}</span>}

          <span className='flex items-center mb-2'><MdPhotoCamera className='text-2xl mr-2' />
            <input {...register("img", { required: "Please uploady your profile photo" })} type="file" className="my-2" />
          </span>
          {errors.img && <span className='text-error flex items-center gap-1'><BiError />{errors.img.message}</span>}

          <span className='flex items-center mb-2'><MdLock className='text-2xl mr-2' />
            <input {...register("password", { required: "Please provide a strong password" })} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs rounded-full bg-[#fff6e7] focus:outline-none focus:bg-[#cdfffb]" />
          </span>
          {errors.password && <span className='text-error flex items-center gap-1'><BiError />{errors.password.message}</span>}

          <span className='flex items-center mb-2'><MdLock className='text-2xl mr-2' />
            <input {...register("password2", { required: "Confirm your password" })} type="password" placeholder="Confirm Password" className="input input-bordered w-full max-w-xs rounded-full bg-[#fff6e7] focus:outline-none focus:bg-[#cdfffb]" />
          </span>
          {errors.password2 && <span className='text-error flex items-center gap-1'><BiError />{errors.password2.message}</span>}
          {errorMsg && <span className='text-error flex items-center gap-1'><BiError />{errorMsg}</span>}

          <input type="submit" value="Sign Up" className="btn btn-success w-full rounded-md mt-4 mb-3" />
        </form>

        <div className="divider">OR</div>
        <GoogleLogin />
        <p className='font-bold'>Already have an Account? <Link to='/login' className='text-success'>Login Here</Link></p>
      </div>
    </section>
  )
}

export default Register