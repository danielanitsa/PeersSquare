import React, { useState } from 'react'

import Logo from '../Polygon-Nightfall.svg'
import Button from '@mui/material/Button';
import { auth } from '../FirebaseConfig';
import { signOut } from 'firebase/auth';
import { BsSun , BsFillMoonStarsFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

function Navbar({theme , setTheme}) {
  
  const navigate = useNavigate()
  const signOutWithGoogle = () => {
    signOut(auth)
     navigate('/')
  }

  return (
    
    <div className={ theme ? 'bg-[#424549] py-4 fixed top-0 w-full drop-shadow-lg flex justify-between items-center flex-row px-6 transition ease-linear delay-150 z-40' : 'bg-gray-100 py-4 fixed top-0 w-full drop-shadow-lg flex justify-between items-center flex-row px-6 transition ease-linear delay-150 z-40'}>
       <img src={Logo} alt='logo' style={{'height': 50 , 'width': 'auto'}} />
       
       <div className='flex flex-row '>
        <Button onClick={signOutWithGoogle} variant='text' sx={{'width': 150 ,  'marginRight':{sm:0.5 , md:5}}} color='error'>Sign Out!</Button>   
          {theme ? <BsSun onClick={() => {setTheme(!theme)}} size={30} className={theme && 'text-white transition ease-linear delay-150 hover:text-yellow-500'}  /> : <BsFillMoonStarsFill onClick={() => {setTheme(!theme)}} size={30} className='text-black transition ease-linear delay-150 hover:text-yellow-500'  />}
       </div>
       
      </div>
        
        
    
  )
}

export default Navbar