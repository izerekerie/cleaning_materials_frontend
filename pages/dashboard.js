import React, {useState} from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import add from '../public/images/add.svg'
import close from '../public/images/close.svg'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
export default function Dashboard() {
    const [isModalOpen,setIsModalopen]=useState(false)
    const router=useRouter();
    const panels=[
        {
          title:'Total Materials',
          textColor:'text-blue',
          number:115,
          path:'/materials'
        },
        {
          title:'Requested Materials',
          textColor:'text-green',
          number:30,
          path:'/dashboard'
        },
        {
          title:'Materials',
          textColor:'text-purple',
          number:10,
          path:'/materials'
        },
        {
          title:'Dormitories',
          textColor:'text-pink',
          number:2,
          path:'/dormitories'
        }
      ]
    
      
      return (
          <Layout>
        <div className="h-full w-full text-blue-700 font-openSans">
          <div className='flex space-x-12 p-6'>
            {panels.map((panel,i)=>{
              return(
                <div onClick={()=>{router.push(panel.path)}} key={i} className={` w-full h-24 shadow-md p-4  ${panel.textColor}`} >
                <p className={` text-openSans text-l  font-semibold text-center`}>{panel.title}</p>
                <p className={`text-lg font-semibold text-center p-1`}>{panel.number}</p>
                </div>
            )})}
         
           
          </div>
          <div className='flex justify-between w-11/12 p-4'>
            <p className='pl-4 font-semibold p-2'>Requested Tools</p>
            <div onClick={()=>{setIsModalopen(true)}} className=' bg-blue p-1 flex '>
              <Image height={16} width={20} src={add}/>
              <p className='text-white text-sm p-2 '>Make A request</p></div>
          </div>
          <div className='h-auto p-8 m-8 shadow-lg'>
          <div className='flex m-2 mb-4  '>
           <p className='w-1/5 text-xs'>Category</p>
           <p className='w-1/5 text-xs'>Quantity</p>
           <p className='w-1/5 text-xs'>Dormitory</p>
           <p className='w-1/5 text-xs'>Status</p>
           <p className='w-1/5 text-xs text-center'>Action</p>
           
          </div>
    
          <div className='flex m-2 bg-white h-12 w-full  shadow-md p-2 pt-4'>
           <p className='w-1/5 text-xs text-grey'>Mops</p>
           <p className='w-1/5 text-xs text-grey'>34</p>
           <p className='w-1/5 text-xs text-grey'>Girls</p>
           <p className='w-1/5 text-xs text-grey'>Pending</p>
           <div className='w-1/5 flex space-x-4'>
             <button className='text-xs w-full text-blue bg-lightblue h-5 rounded-lg'>edit</button>
             <button className='text-xs w-full text-red bg-lightred h-5 rounded-lg '>delete</button>
           </div>
          </div>
          <div className='flex m-2 bg-white h-12 w-full  shadow-md p-2 pt-4'>
           <p className='w-1/5 text-xs text-grey'>Mops</p>
           <p className='w-1/5 text-xs text-grey'>34</p>
           <p className='w-1/5 text-xs text-grey'>Girls</p>
           <p className='w-1/5 text-xs text-grey'>Pending</p>
           <div className='w-1/5 flex space-x-4'>
             <button className='text-xs  w-1/2 text-blue bg-lightblue h-5 rounded-lg'>edit</button>
             <button className='text-xs  w-1/2 text-red bg-lightred h-5 rounded-lg '>delete</button>
           </div>
          </div>
          </div>

          <Modal ariaHideApp={false} isOpen={isModalOpen} className="  bg-black shadow-lg flex justify-center h-screen  bg-opacity-60 p-12" >
          <div className="w-full md:w-1/3 p-4 bg-white">
            <div className="flex justify-end">
            <Image className="" height={15} width={20} src={close} onClick={()=>{setIsModalopen(false)}}  alt="close"/>
            </div>

            <h1 className=' text-center  text-lg  font-semibold  text-blue p-4 '>Request for new materials</h1>
           <div className='m-2 w-full'>
               <p className='  p-3  text-sm font-light'>Material</p>
               <input placeholder='Enter material name' type='text' className='border focus:outline-none w-11/12 p-2 text-sm font-light rounded  broderr-blue' />
           </div>
           <div className='m-2 w-full'>
               <p className='  p-3  text-sm font-light'>Quantity</p>
               <input placeholder='Enter quantity' type='number' className='border focus:outline-none w-1/4 p-2 text-sm font-light rounded  broderr-blue' />
           </div>
           
               <p className='  p-3  text-sm font-light'>To be used  by :</p>
             <div className='ml-6'>
             <input type="radio"  name="usedby" value="girls"/>
               <label className='  p-3  text-sm font-light'>Girls Dormitory</label>
             </div>
             <div className='ml-6'>
             <input type="radio"  name="usedby" value="girls"/>
               <label className='  p-3  text-sm font-light'>Boys Dormitory</label>
             </div>
           <div className='flex justify-center m-6'>
           <button onClick={()=>{setIsModalopen(false)}} className='p-2 bg-blue mt-5 text-white text-sm font-light'>Send Request</button>

           </div>
           </div>
            
          </Modal>
        </div>
        </Layout>
      )
}
