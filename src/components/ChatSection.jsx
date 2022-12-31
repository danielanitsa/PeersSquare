import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../FirebaseConfig'
import Message from './Message'
import CircularProgress from '@mui/material/CircularProgress';


function ChatSection({theme , setTheme , scroll,  isTheGifReal , setIsTheGifReal , gifSelected , setGifSelected , url , setUrl }) {
  const [messages , setMessages] = useState([])
  
  useEffect(() => {
    const q = query(collection(db , 'messages'), orderBy('createdAt'))
    const unsubscribe = onSnapshot(q , (querySnapshot) => {
        let currentMessages = []
        querySnapshot.forEach(doc => {
            currentMessages.push({...doc.data() , id: doc.id})
        })
        setMessages(currentMessages)
        
    })
    return () => unsubscribe()
  }, [])
    return (
    <div className={ theme ? 'chatSection max-h-[85%] h-full max-w-full w-full overflow-y-auto md:max-w-screen-md scrolling overflow-x-hidden ': 'chatSection max-h-[85%] h-full max-w-full w-full overflow-y-auto md:max-w-screen-md white-scrolling overflow-x-hidden'}>
        <div className='flex flex-col mt-24  relative'>
            
            
            {messages.length > 0 ?  messages.map(item => {
              return <Message  key={item.id} message={item} theme={theme} setTheme={setTheme} scroll={scroll} isTheGifReal={isTheGifReal} setGifSelected={setGifSelected} setIsTheGifReal={setIsTheGifReal} gifSelected={gifSelected} url={url} setUrl={setUrl}/>
            }) : ( <CircularProgress className='circularProgress' />)} 
         
                
                
            
            
        </div>
    </div>
  )
}

export default ChatSection