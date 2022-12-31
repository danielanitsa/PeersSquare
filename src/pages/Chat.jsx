import React, { useRef } from 'react'
import ChatSection from '../components/ChatSection'
import Navbar from '../components/Navbar'
import SendMessage from '../components/SendMessage'

function Chat({theme , setTheme , isTheGifReal , setIsTheGifReal , gifSelected , setGifSelected , url,setUrl , isBackcground, setIsBackcground}) {
  const scroll = useRef(null)
  const gifArray = []
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <ChatSection theme={theme} setTheme={setTheme} scroll={scroll} isTheGifReal={isTheGifReal} setGifSelected={setGifSelected} setIsTheGifReal={setIsTheGifReal} gifSelected={gifSelected} url={url} setUrl={setUrl}  />
      <SendMessage theme={theme} setTheme={setTheme} scroll={scroll} isTheGifReal={isTheGifReal} setGifSelected={setGifSelected} setIsTheGifReal={setIsTheGifReal} gifSelected={gifSelected} url={url} setUrl={setUrl} isBackcground={isBackcground} setIsBackcground={setIsBackcground}  />
    </div>
  )
}

export default Chat