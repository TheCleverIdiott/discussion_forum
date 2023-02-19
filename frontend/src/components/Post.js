import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineOutlined, CloseRounded, MoreHorizOutlined, RepeatOnOutlined, ShareOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import "./css/Post.css";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css"

function Post() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const Close = (<CloseRounded />)

  return (
    <div className='post'>
      <div className='post__info'>
        <Avatar/>
        <h4>UserName</h4>
        <small>Timestamp</small>
      </div>
     
        <div className='post__question'>
          <p>
              This is test Question
          </p>
          <button onClick={() => setIsModalOpen(true)} className='post__btnAnswer'>Answer</button>
          <Modal open = {isModalOpen} closeIcon = {Close} onClose = {() => setIsModalOpen(false)} closeOnEsc center closeOnOverlayClick={false} styles={{overlay:{height:"auto",}}}>
            <div className='modal__question'>
                <h1>This is test question</h1>
                <p>asked by {" "}<span className='name'>Username</span>{" "}on <span className='name'>{" "}timestamp</span></p>

            </div>
            <div className='modal__answer'>
                <ReactQuill placeholder='Enter your Answer'/>
            </div>
            <div className='modal__button'>
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
            </button>
            <button type="submit" className="add" onClick={() => setIsModalOpen(false)}>
                Add Answer
            </button>
            </div>
          </Modal>
        </div>

      <div className='post__footer'>
        <div className='post__footerAction'>
            <ArrowUpwardOutlined/>
        </div>
        <div className='post__footerAction'>
            <ArrowDownwardOutlined/>
        </div>
        <RepeatOnOutlined/>
        <ChatBubbleOutlineOutlined/>
        <div className='post__footerLeft'>
            <ShareOutlined/>
            <MoreHorizOutlined/>
        </div>
      </div>
      <p style={{color:"rgb(0,0,0,0.5)", fontSize: "12px", fontWeight:"bold", margin:"10px 0px"}}>1 Answer</p>
      <div style={{margin: "5px 0px 0px 0px", padding: "5px 0px 0px 20px", borderTop:"1px solid lightgray "}} className='post__answer'>
        <div style={{display:"flex", flexDirection:"column", width:"100%", padding:"10px 5px", borderTop:"1px solid lightgray"}} className='post-answer-container'>
            <div style={{display:"flex", alignItems:"center", marginBottom:"10px", fontSize:"12px", fontWeight:600,color:"#888",}} className='post-answered'>
                <Avatar/>
                <div  style={{margin:"0px 10px",}}
                className='post-info'>
                    <p>UserName</p>
                    <span>Timestamp</span>
                </div>
            </div>
            <div className='post-answer'>This is test Answer</div>
        </div>
      </div>
    </div>
  )
}

export default Post;
