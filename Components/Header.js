import React from 'react'

const Header = (props) => {
  return (
    <div className='bg-blue-300 h-16 '>
        <h1>{props.uname}</h1>
    </div>
  )
}

export default Header