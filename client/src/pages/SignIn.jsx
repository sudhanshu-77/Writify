import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'

import { signInStart, signInSuccess , signInFail } from '../redux/user/userSlice'
import { useDispatch  ,useSelector} from 'react-redux'
import OAuth from '../Components/OAuth'

function SignIn() {

  const [formData, setFormData] = useState({});
  
  const navigate = useNavigate();
  const {loading,error: errorMessage} = useSelector((state)=>state.user);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !formData.email || !formData.password) {
      return dispatch(signInFail('Please fill out all fields.'));
    }
    try {
      
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFail(data.message));
      }
      if(res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFail(error.message));
    }
  }
  return (
   <>
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Writify
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
             You can sign In with your email and password
        
          </p>
        </div>
        {/* right */}

        <div className='flex-1'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4' >
           
            <div>
              <Label value='Your email' />
              <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange} />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput type='password' placeholder='Password' id='password' onChange={handleChange} />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {loading ? (
                <>
                <Spinner size='sm' />
                <span className='pl-3'>Loading...</span>
              </>
              ) : 'Sign In'}  
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't Have an account?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color='failure' >
              {errorMessage}
            </Alert>
          )
          }
        </div>
      </div>
    </div>
   
   </>
  )
}

export default SignIn