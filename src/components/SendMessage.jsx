import { Button, InputAdornment, TextField } from '@mui/material'
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { GrSend } from 'react-icons/gr'
import { db , auth } from '../FirebaseConfig'
import { BsEmojiSmile } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { AiOutlineGif } from 'react-icons/ai'
import GifPicker from 'gif-picker-react';

import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function SendMessage({ scroll ,  gifSelected , setGifSelected }) {
  const [value , setValue] = useState('')
  const [isGifOpen , setIsGifOpen] = useState(false)
  const apiKey = 'AIzaSyBsSZOMkRquFU72vuxSQ5OOtqPTD3z7E-w'
  const [open , setOpen] = useState(false)
  
  const Filter = require('bad-words');
  
   const filter = new Filter();
   const navigate = useNavigate()
   const greekSwearWordsArray = ['malakas' , 'μαλακας' , 'gamhsou' , 'γαμησου' , 'αρχιδια' , 'arxidia' , 'πουτσα' , 'poutsa' , 'χεστηκα' , 'xesthka' , 'πουστη' , 'pousth' , 'γαμω' , 'gamw' , 'poutana' , 'πουτανα' , 'σκατα' , 'skata', 'γαμω την μανα σου' , 'gamw thn mana sou' , 'γαμω τον χριστο σου' , 'gamw ton xristo sou', 'γαμω την παναγια σου' , 'gamo thn panagia sou' , 'αι γαμησου','ai gamhsou' , 'να πας να γαμηθεις' , 'na pas na gamhthis']
   filter.addWords(...greekSwearWordsArray)
  const SendMessage = async (e) => {
    e.preventDefault()
    const {uid, displayName , photoURL} = auth.currentUser
    if(!value) return
   
    let text = value
    if(filter.isProfane(text)) {
      text = `I got banned for saying ${filter.clean(text)}🤐🤐`
      const docRef = doc(db , "banned" , uid)
      const payload = {uid: uid, user: displayName}
      setDoc(docRef , payload)
      setTimeout(() => {
        signOut(auth)
        navigate('/')
      }, 5000)
      
    }
    await addDoc(collection(db , 'messages') , {
        text,
        name: displayName,
        uid,
        photoURL: photoURL,
        createdAt: serverTimestamp(),
        
        
    })
    
    setValue('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  const emojiHandler = () => {
    setOpen(!open)
  }

  function EmojiFoo(e) {
    setValue(`${value}${e.native}`)
  }

  function handleGif() {
    setIsGifOpen(!isGifOpen)
  }

  

const sendGifMessage = async () => {
  const {uid, displayName , photoURL} = auth.currentUser
  await addDoc(collection(db , 'messages') , {
    name: displayName,
    uid,
    photoURL: photoURL,
    gif: `${gifSelected}`,
    createdAt: serverTimestamp(),
    
    
})
scroll.current.scrollIntoView({behavior: 'smooth'})
}
  

    return (
    <div className=' flex justify-center h-screen items-end'>
        <form onSubmit={SendMessage}>
         {open ? <div className='flex justify-center md:justify-end'><Picker data={data} onEmojiSelect={EmojiFoo} /></div> : null }
         {isGifOpen ? <div className='gifContainer'>
          <GifPicker  tenorApiKey={apiKey} onGifClick={(e) => {setGifSelected(e.url)}}   />
          <Button variant='contained'onClick={sendGifMessage} className='fixed bottom-9 w-[350px] '>Upload Gif!</Button>
          </div> : null} 
            <TextField  variant="filled" placeholder='enter your message here' value={value} onChange={(e) => {setValue(e.target.value)}} className={ 'w-[390px]  drop-shadow-lg md:w-[770px]'} sx={{marginBottom: 1}}
            InputProps={{
                
                endAdornment: (
                    <InputAdornment position="end">
                      <GrSend size={25} type='submit' onClick={SendMessage} className='hover:cursor-pointer mr-2' />
                    {open ? <GrClose size={25} type='submit' className='hover:cursor-pointer' color='black' onClick={emojiHandler} /> : <BsEmojiSmile size={25} type='submit' className=' mr-2 hover:cursor-pointer' color='black' onClick={emojiHandler}  />}   
                    {isGifOpen ? <GrClose size={25} type='submit' className='hover:cursor-pointer' color='black' onClick={handleGif} /> : <AiOutlineGif size={25} type='submit' className='hover:cursor-pointer' color='black' onClick={handleGif} /> }
                    </InputAdornment>
                  ),}}
            />
        </form>
        
    </div>
  )
}

export default SendMessage