import React from 'react'
import Image from 'next/image'
import profilePic from '../public/images/about.jpg'
import dash from '../public/images/dashboard.svg'
import dorm from '../public/images/dorm.svg'
import group from '../public/images/group.svg'
import logout from '../public/images/logout.svg'
import Link from 'next/link'
function Sidebar() {

  const Links=[
    {
      title:'Dashboard',
     icon:dash,
     link:'/dashboard'
    },
    {
      title:'Dormitories',
      icon:dorm,
      link:'/dormitories'
    },
    {
      title:'Materials',
      icon:group,
      link:'/materials'
    }
  ]

  
  return (
    <div className=' relative w-1/5 h-screen shadow-lg'>
        
        <div className='ml-20  p-2 '>
          <Link href='/'>
          <p className='text-blue p-2 py-6 text-left font-bold'>DCMMS</p>
</Link>
        <Image alt='profilepic' className=' rounded-full' height={80} width={80} src={profilePic}/>
        </div>
        <p className='text-center text-blue  font-semibold'>Mutoni_Denise</p>
        <p className='text-center text-sm  text-grey pb-8'>Metron</p>

        {Links.map((link,i)=>{
          return(
            <div key={i} className=' mt-4 ml-12  flex   w-full h-12'>
              <div className=' w-1/5 '>
              <Image alt='icon'   src={link.icon}/>
              </div>
            <Link href={`${link.link}`}  className=' text-left  w-4/5 '>
            <p   className=' text-left text-blue'>{link.title}</p>
            </Link>
        
            </div>
          )

        })}
         <div  className=' absolute bottom-2 ml-12  flex   w-full h-12'>
              <div className=' w-1/5 '>
              <Image alt='icon'   src={logout}/>
              </div>
            <div className='mb-6 text-left  w-4/5 '>
              <Link href={'/'}>
              <p className=' text-left text-grey'>Logout</p>
              </Link>
          
            </div>
        
            </div>
        </div>
  )
  }

export default Sidebar