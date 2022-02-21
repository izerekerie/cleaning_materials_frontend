import Modal from 'react-modal'
import Image from 'next/image'
import Link from 'next/link'
import home1 from '../public/images/home1.svg'
import home2 from '../public/images/home2.svg'
import close from '../public/images/close.svg'
import React,{ useState } from 'react'
export default function Home() {
  const [isLogin,setIsLogin]=useState(false)
  const [isRegister,setIsRegister]=useState(false)
 return(
   <div className='relative'>
     <div className='flex justify-between w-full p-8'>
       <p className='text-lg font-bold text-blue'>DCMMS</p>
       <button onClick={()=>{setIsLogin(true)}} className='border rounded border-blue text-blue p-1 w-1/12'>Login</button>
     </div>
     <div className='flex justify-between p-8 mb-0 m-12'>
       <p className='w-1/3 text-center text-blue font-bold mt-12 text-2xl' >Dormitory Cleaning Materials Management System</p>
      <div className='ml-12'>
      <Image  alt='manage'  width={400} src={home1}/>
      </div>
     </div>
     <div className='absolute bottom-4'>
      <Image  alt='tools' width={400} src={home2}/>
      </div>

      <Modal ariaHideApp={false} isOpen={isLogin} className="  bg-black shadow-lg flex justify-center h-screen  bg-opacity-60 p-12" >
          <div className="w-full md:w-1/3 p-4 bg-white">
            <div className="flex justify-end">
            <Image alt='close' className="" height={15} width={20} src={close} onClick={()=>{setIsLogin(false)}}  alt="close"/>
            </div>

            <h1 className=' text-center  text-lg  font-semibold  text-blue p-4 '>Login</h1>
           <div className='m-2 w-full'>
               <p className='  p-3  text-sm font-light'>Username</p>
               <input placeholder='Enter user name' type='text' className='border focus:outline-none w-11/12 p-2 text-sm font-light rounded  broderr-blue' />
           </div>
           <div className='m-2 w-full'>
               <p className='  p-3  text-sm font-light'>Quantity</p>
               <input placeholder='Enter password' type='password' className='border focus:outline-none w-11/12 p-2 text-sm font-light rounded  broderr-blue' />
           </div>
           
              
           <div className='flex justify-center m-6'>
             <Link href={'/dashboard'}>
             <button onClick={()=>{setIsModalopen(false)}} className='p-2 bg-blue mt-5 w-1/4 text-white text-sm font-light rounded'>Login</button>

             </Link>
           </div>
           <p className='text-sm  text-center '>Don’t have an account yet? Register <span onClick={()=>{setIsRegister(true)}} className='text-blue'>here</span></p>
           <p className='text-sm  text-blue text-center'>Forgot password?</p>
           </div>
            
          </Modal>
          {/* Register form */}
          <Modal ariaHideApp={false} isOpen={isRegister} className="   bg-black shadow-lg flex justify-center h-auto h-scroll  bg-opacity-60 p-10" >
          <div className="w-full md:w-1/3 p-2 bg-white">
            <div className="flex justify-end">
            <Image alt='close' height={15} width={20} src={close} onClick={()=>{setIsLogin(false),setIsRegister(false)}}  alt="close"/>
            </div>

            <h1 className=' text-center  text-lg  font-semibold  text-blue p-2 ' >Register</h1>
           <div className='m-1 w-full'>
               <p className='  p-2  text-sm font-light'>Username</p>
               <input placeholder='Enter user name' type='text' className='border focus:outline-none w-11/12 p-2 text-sm font-light rounded  broderr-blue' />
           </div>
           <div className='m-1 w-full'>
               <p className='  p-2  text-sm font-light'>Email</p>
               <input placeholder='Enter email' type='email' className='border focus:outline-none w-11/12 p-2 text-sm font-light rounded  broderr-blue' />
           </div>
           <div className='m-1 w-full'>
               <p className='  p-2  text-sm font-light'>Role</p>
               <input placeholder='Choose role' type='text' className='border focus:outline-none w-11/12 p-2 text-sm font-light rounded  broderr-blue' />
           </div>
           <div className='m-1 w-full'>
               <p className='  p-2  text-sm font-light'>Password</p>
               <input placeholder='Enter password' type='password' className='border focus:outline-none w-11/12 p-2 text-sm font-light rounded  broderr-blue' />
           </div>
           <div className='m-1 w-full'>
               <p className='  p-2  text-sm font-light'>Confirm password</p>
               <input placeholder='Enter password' type='password' className='border focus:outline-none w-11/12 p-2 text-sm font-light rounded  broderr-blue' />
           </div>
              
           <div className='flex justify-center m-4'>
           <Link  href={'/dashboard'}  >
             <button className='p-2 bg-blue mt-5 w-1/4 text-white text-sm font-light rounded' onClick={()=>{setIsRegister(false)}} >Register</button>
             </Link>
           </div>
           <p className='text-sm  text-center '>Already have an account yet? Login <span  onClick={()=>{setIsLogin(true),setIsRegister(false)}} className='text-blue'>here</span></p>
    
           </div>
            
          </Modal>
   </div>
 )
}
