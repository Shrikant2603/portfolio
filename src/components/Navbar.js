import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const links = [
    {
      id:1,
      link:'home'
    },
    {
      id:2,
      link:'about'
    },
    {
      id:3,
      link:'portfolio'
    },
    {
      id:4,
      link:'experience'
    },
    {
      id:5,
      link:'contact'
    },
  ]

  const [nav, setNav] = useState(false)
  return (
    <div className='flex justify-between items-center w-full text-white bg-black fixed px-4 h-20'>
        <div>
          <h1 className='text-5xl font-funky'>Shrikant</h1>
        </div>
        <ul className='hidden md:flex'>

          {links.map(link=>{
            return <li key ={link.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105'>{link.link}</li>
            
          })}
        </ul>
        <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
          {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {nav && 
          (<ul className='flext flex-co justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500'>

          {links.map(link=>{
              return <li key ={link.id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>{link.link}</li>
              
            })}
          </ul>)
        }
    </div>
    
  )
}

export default Navbar