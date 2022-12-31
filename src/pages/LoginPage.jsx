import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth, db } from '../FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'


function LoginPage() {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  console.log(user)

  return (
    <div>
        <div style={{'display': 'none'}}>
          <Navbar />
        </div>
        <Welcome  />
    </div>
  )
}

export default LoginPage