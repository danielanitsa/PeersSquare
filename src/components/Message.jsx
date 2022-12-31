
import React from 'react'

import { auth } from '../FirebaseConfig'


function Message({ message, theme ,  scroll  }) {
   const user = auth.currentUser.uid
   const newUser = message.uid
   
  
   
   

   
   
  

   const style = {
    time: user === newUser ? `fixed   py-4 text-gray-400 text-xs left-[55%] md:left-[77%]` : ` fixed  py-4    text-gray-400 text-xs  right-[55%] md:right-[77%]`,
    message:  theme ? `flex items-center    py-12 px-12 rounded-lg   hover:bg-[#36393F] transition ease-linear delay-150 ` : `flex items-center   py-12 px-12 rounded-xl  hover:bg-gray-200 transition ease-linear delay-150 ` ,
    name: user === newUser ? `absolute mt-[-4rem] text-purple-400 text-xs` : `absolute mt-[-4rem] text-pink-400 text-xs`,
    sent: theme ? ` text-white flex-row-reverse text-end float-right ` : ` text-black flex-row-reverse text-end float-right`,
    received:  theme ? ` text-white float-left ` : ` text-black float-left `,
  };

  const date = new Date(message.createdAt?.seconds * 1000);
  const options = { 
      month: 'long', 
      day: 'numeric' 
  };
  let h = date.getHours();
  let m = date.getMinutes();
  let time = h + ":" + m;

  const newDate = date.toLocaleDateString('en-US', options);


  const messageClass = 
  user === newUser
  ? `${style.sent}`
  : `${style.received}`
    return (
    <div>
         
        <div className={`${style.message} ${messageClass}`}>
       
        <img src={message.photoURL} className='rounded-full h-10 w-auto' alt="photoURL" />
              <p className={style.name}>{message.name}</p>
            <div>
             { message.gif ? <img src={message.gif} className={user === newUser ? 'pr-6 md:h-60 w-auto' : 'pl-6 md:h-60 w-auto'} alt="gif" /> : <p className='mx-4   flex-wrap '>{message.text}</p> }
            
            
            <p className={style.time} >{`${newDate} - ${time}`}</p>
           
            </div>
            
            
          
           
       </div>
      <div ref={scroll}></div>
    </div>
   
  )
}

export default Message