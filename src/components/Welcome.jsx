import { GoogleAuthProvider, onAuthStateChanged,  signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom'
import { auth } from '../FirebaseConfig'
import Logo from '../Polygon-Nightfall.svg'
function Welcome() {
  const navigate = useNavigate()
  
  const authWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    
    signInWithRedirect(auth , provider)
    navigate('chat')
       
       
  }
  return (
    <div className='flex items-center justify-center h-screen welcome_background' >
        <div className='max-w-sm w-full max-h-[37.5rem] h-full bg-gray-800 rounded-xl drop-shadow-xl md:max-w-md '>
            <div className='flex flex-col items-center justify-center text-white '>
                <img src={Logo} alt='logo' style={{'height':150 , 'width': 'auto'}} />
                <h1 className='text-3xl text-medium mb-24'>PeersSquare</h1>
                <ul className='list-disc ml-10'>
                    <li>Do not swear , be friendly</li>
                    <li>Do not send Dick pics, {'(I am talking to you boys)'} </li>
                    <li>No NSWF content </li>
                    <li>Have fun and explore the app {':)'} </li>
                </ul>
                <div className='justify-end'>
                <GoogleButton className='relative top-24' onClick={authWithGoogle} />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Welcome