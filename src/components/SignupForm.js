import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'


const SignupForm = ({setIsLoggedIn}) => {
 const navigate = useNavigate();


 const[confirmPassword,setconfirmPassword] = useState (true);
const [showPassword,setShowPassword] = useState(false)
const [accountType,setAccountType] = useState("student")
const [formData,setFormData] = useState ({
  firstName:"",lastName:"",email:"",password:"",
  confirmPassword:""
})

function changeHandler(event){
  setFormData((prevData)=>({
    ...prevData,[event.target.name]:event.target.value
  }))
}
  function submitHandler (event){
    event.preventDefault();
    if (formData.password !==formData.confirmPassword) {
      toast.error("Passwors Not Match")
          return ;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const  accountData = {
      ...formData
    };
    console.log("Print account data");
    console.log(accountData)
    navigate("/dashbord ")
  }

  return (
    <div>

  <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

    <button  className={` ${accountType ==="student"
    ?"bg-richblack-900 text-richblack-5"
    :"bg-transparent text-richblack-200"}
    py-2 px-5 rounded-full transition-all duration-200`}
    onClick={()=>setAccountType("student")} >
    Student</button>


    <button  className={` ${accountType ==="instrunctor"
    ?"bg-richblack-900 text-richblack-5"
    :"bg-transparent text-richblack-200"}
    py-2 px-5 rounded-full transition-all duration-200`}
    onClick={()=>setAccountType("instrunctor")} >
    Instrunctor</button>
    </div>

   <form onSubmit={submitHandler}>
{/*
   First Name And Last Name */}


  <div className=' flex  justify-between'>
  <label  >
      <p className='text-[0.785rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
    <input  required type="text" value={formData.firstName} name='firstName' placeholder='Enter the first Name' onChange={changeHandler}
       className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
    />
    </label>

    <label >
      <p className='text-[0.785rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
    <input  required type="text"  value={formData.lastName}  name='lastName' placeholder='Enter the Last Name' onChange={changeHandler}
       className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
    />
    </label>
  </div>




{/* email add div */}

  <label >
      <p className='text-[0.785rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
    <input  required type="email" name='email' value={formData.email}  placeholder='Enter the Correct Email' onChange={changeHandler}
       className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
    />
    </label>


{/* password div */}
     <div className=' flex  justify-between  '>
     <label className='relative'>
    <p className='text-[0.785rem] text-richblack-5 mb-1 leading-[1.375rem]'> Create Password <sup className='text-pink-200'>*</sup></p>
  <input required type={showPassword ? ("text"):("password")} value={formData.password} id='password' placeholder='Enter the  Pasword' onChange={changeHandler} name='password'
     className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
  />
  <span onClick={()=>setShowPassword((prev)=>!prev)}  className='absolute right-3 top-[38px] cursor-pointer'>
    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
  </span>
  </label>


  <label className='relative' >
    <p className='text-[0.785rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password</p>
    <input required type={confirmPassword ? ("text"):("password")} value={formData.confirmPassword} id='confirmPassword' placeholder=' Confirm Password ' onChange={changeHandler} name='confirmPassword'
       className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
    />
  <span onClick={()=>setconfirmPassword ((prev)=>!prev)} className='absolute right-3 top-[38px] cursor-pointer'>
    {confirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
  </span>
  </label>
     </div>

     <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
      Create Account
     </button>
  </form>
    </div>
  )
}

export default SignupForm
