import React from 'react'
import add from '../../public/images/add.svg'
import Image from 'next/image'
import Layout from '../../components/Layout'
import close from '../../public/images/close.svg'
import Modal from 'react-modal'
import { useState } from 'react'
export default function Dormitories() {
    const [isModalOpen1,setIsModalopen1]=useState(false)
    const [isModalOpen2,setIsModalopen2]=useState(false)
    const dormitories=[
        {
            name:'Girls Dormitory',
            total:34,
            createdAt:'12-02-2022 9:12 AM',
            id:1
        },
        {
            name:'Boys Dormitory',
            total:34,
            createdAt:'12-02-2022 9:12 AM',
            id:2
        },

        ]
  return (
      <Layout>
    <div className='m-4 w-full'>

    <div className='flex justify-between w-11/12 p-4'>
            <p className='pl-4 text-blue text-lg font-semibold p-2'>Dormitories</p>
            <div className=' bg-blue p-1 flex '>
              <Image alt='add' height={16} width={20} src={add}/>
              <p className='text-white text-sm p-2 ' onClick={()=>{setIsModalopen1(true)}}>Create new</p></div>
          </div>
          <div className='h-auto p-8 m-8 shadow-lg'>
          <div className='flex m-2 mb-4  '>
           <p className='w-1/4 text-xs text-center '>Name</p>
           <p className='w-1/4 text-xs text-center '>Total tools</p>
           <p className='w-1/4 text-xs text-center '>Created At</p>
           <p className='w-1/4 text-xs text-center'>Action</p>
           
          </div>
         {dormitories.map((dorm,i)=>{
             return(
                <div  key={i} className='flex m-2 bg-white h-12 w-full  shadow-md p-2 pt-4'>
                <p className='w-1/4 text-xs text-grey text-center '>{dorm.name}</p>
                <p className='w-1/4 text-xs text-center text-grey'>{dorm.total}</p>
                <p className='w-1/4 text-xs text-center text-grey'>{dorm.createdAt}</p>
                
                <div className='w-1/4 flex space-x-4'>
                  <button className='text-xs w-1/2 text-blue bg-lightblue h-5 rounded-lg' onClick={()=>{setIsModalopen2(true)}}>edit</button>
                  <button className='text-xs w-1/2 text-red bg-lightred h-5 rounded-lg '>delete</button>
                </div>
               </div>
             )
         })}
         
        
          </div>

          <Modal ariaHideApp={false} isOpen={isModalOpen1} className="  bg-black shadow-lg flex justify-center h-screen  bg-opacity-60 p-12" >
          <div className="w-full h-72 md:w-1/3 p-4 bg-white">
            <div className="flex justify-end">
            <Image alt='close'  height={15} width={20} src={close} onClick={()=>{setIsModalopen1(false)}}  alt="close"/>
            </div>

            <h1 className=' text-center  text-lg  font-semibold  text-blue p-4 '>Create New Dormitory</h1>
           <div className='m-2 w-full'>
               <p className='  p-3  text-sm font-light'>Name</p>
               <input placeholder='Enter dormitory name' type='text' className='border focus:outline-none w-11/12 p-2 text-sm font-light rounded  broderr-blue' />
           </div>
                     
           <div className='flex justify-center m-6'>
           <button onClick={()=>{setIsModalopen1(false)}} className='p-2 bg-blue mt-5 text-white text-sm w-1/4 font-light'>Save</button>

           </div>
           </div>
          </Modal>
          <Modal ariaHideApp={false} isOpen={isModalOpen2} className="  bg-black shadow-lg flex justify-center h-screen  bg-opacity-60 p-12" >
          <div className="w-full h-72 md:w-1/3 p-4 bg-white">
            <div className="flex justify-end">
            <Image alt='close'  height={15} width={20} src={close} onClick={()=>{setIsModalopen2(false)}}  alt="close"/>
            </div>

            <h1 className=' text-center  text-lg  font-semibold  text-blue p-4 '>Edit Dormitory</h1>
           <div className='m-2 w-full'>
               <p className='  p-3  text-sm font-light'>Name</p>
               <input placeholder='Enter dormitory name' type='text' className='border focus:outline-none w-11/12 p-2 text-sm font-light rounded  broderr-blue' />
           </div>
                     
           <div className='flex justify-center m-6'>
           <button onClick={()=>{setIsModalopen2(false)}} className='p-2 bg-blue mt-5 text-white text-sm w-1/4 font-light'>Save</button>

           </div>
           </div>
          </Modal>
        </div>
        </Layout>
  )
}
