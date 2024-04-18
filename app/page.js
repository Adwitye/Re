"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'


const page = () => {
  const [user, setuser] = useState("Aditya")
  return (
   <>
  <Header uname={user}>
  </Header>
   <h1>
    My Name is {user}
   </h1>
   <button onClick={()=>{
    setmarks(33)
   } }className='font-bold bg-gray-400'>Update</button>
   </>
  )
}

export default page
