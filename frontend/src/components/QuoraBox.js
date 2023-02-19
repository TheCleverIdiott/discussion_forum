import { Avatar } from '@mui/material'
import React from 'react'
import "./css/QuoraBox.css"

function QuoraBox() {
  return (
    <div className='quoraBox'>
        <div className='quoraBox__info'>
            <Avatar/>
        </div>
        <div className='quoraBox__quora'><p>What is your question or link?</p></div>
    </div>
  )
}

export default QuoraBox
