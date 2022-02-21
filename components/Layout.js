import React from 'react'
import Head from 'next/head'
import Sidebar from './Sidebar'
function Layout({children}) {
  return (
    
     
         <div className='flex h-screen '>
             <Sidebar/>
        
             <div className=' flex w-3/4 h-screen '>
                
             {children}
             </div>
        </div>
    
 
  )
}

export default Layout