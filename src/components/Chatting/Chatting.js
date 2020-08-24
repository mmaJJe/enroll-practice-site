import React, {useState} from 'react'

import './Chatting.css'

import ChattingContent from './ChattingContent'

import ChatIcon from '@material-ui/icons/Chat';


function Chatting() {
    const [chatOpen, setChatOpen] = useState(false)

    const handleChatOpen =()=> {
        if (chatOpen){
            setChatOpen(false)
        } else {
            setChatOpen(true)
        }
    }
    
    return (
        <div className={`chattingBox ${chatOpen ? "" : "close"}`}> 
            <div className="chattingWrap">
                <button className="chatOpenBtn" onClick={handleChatOpen}>
                    <ChatIcon/>
                </button>
                <ChattingContent/>
            </div>
        </div>
    )
}

export default Chatting
