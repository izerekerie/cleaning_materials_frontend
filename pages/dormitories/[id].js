import React from 'react'
import add from '../../public/images/add.svg'
import Image from 'next/image'
import Layout from '../../components/Layout'

export default function Dormitory() {
  return (
      <Layout>
    <div className='m-4 w-full'>

    <div className='flex justify-between w-11/12 p-4'>
            <p className='pl-4 text-blue text-lg font-semibold p-2'>Girls Dormitory</p>
            <div className=' bg-blue p-1 flex '>
              <Image height={16} width={20} src={add}/>
              <p className='text-white text-sm p-2 '>Make request</p></div>
          </div>
          <div className='h-auto p-8 m-8 shadow-lg'>
          <div className='flex m-2 mb-4  '>
           <p className='w-1/4 text-xs text-center '>Name</p>
           <p className='w-1/4 text-xs text-center '>Total tools</p>
           <p className='w-1/4 text-xs text-center '>Created At</p>
           <p className='w-1/4 text-xs text-center'>Action</p>
           
          </div>
    
          <div className='flex m-2 bg-white h-12 w-full  shadow-md p-2 pt-4'>
           <p className='w-1/4 text-xs text-grey text-center '>Girls Dormitory</p>
           <p className='w-1/4 text-xs text-center text-grey'>34</p>
           <p className='w-1/4 text-xs text-center text-grey'>12-02-2022 9:12 AM</p>
           
           <div className='w-1/4 flex space-x-4'>
             <button className='text-xs w-full text-blue bg-lightblue h-5 rounded-lg'>edit</button>
             <button className='text-xs w-full text-red bg-lightred h-5 rounded-lg '>delete</button>
           </div>
          </div>
          <div className='flex m-2 bg-white h-12 w-full  shadow-md p-2 pt-4'>
           <p className='w-1/4 text-xs text-grey text-center '>Boys Dormitory</p>
           <p className='w-1/4 text-xs text-center text-grey'>34</p>
           <p className='w-1/4 text-xs text-center text-grey'>12-02-2022 9:12 AM</p>
           
           <div className='w-1/4 flex space-x-4'>
             <button className='text-xs  w-1/2 text-blue bg-lightblue h-5 rounded-lg'>edit</button>
             <button className='text-xs  w-1/2 text-red bg-lightred h-5 rounded-lg '>delete</button>
           </div>
          </div>
          </div>
        </div>
        </Layout>
  )
}
