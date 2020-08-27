import React, {useState} from 'react'

import './ChattingContent.css'

// import {RadioButtonUnchecked, Clear} from '@material-ui/icons'; 

import { useChatNextId, useChatDispatch, useChatState } from '../../context/ChattingContext'



function ChattingContent() {
    
    const nextId = useChatNextId();
    const chats = useChatState();
    const dispatch = useChatDispatch();
    
    const [chatInput, setChatInput] = useState({chatText: ""})
    const [now, setNow] = useState('')

    const onChatInputChage = e =>{
        const { name, value } = e.target;
        setChatInput({[name]:value});
        console.log(chatInput)
    };
    
    
    
    const onSubmit = e =>{
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const hour = date.getHours();
        const min = date.getMinutes();
        const sec = date.getSeconds();
        e.preventDefault(); // 새로고침 방지
        const time = year+"-"+month+"-"+day+"T"+hour+":"+min+":"+sec
        setNow(time)
        console.log(chatInput.chat)
        dispatch({
        type: 'CHAT',
        chat: {
            id: nextId.current,
            text: chatInput.chatText,
            writeIn: now
        }
        });
        setChatInput({chatText:""});
        nextId.current += 1;
    }



    return (
        <div className="chattingContent">
            <div className="chatting">
                {chats.map(chat=><div className="chat">{chat.text}</div>)}
            </div>
            <div className="chattingForm">
                <form onSubmit={onSubmit}>
                    <textarea name="chatText" value={chatInput.chatText} onChange={onChatInputChage} required/>
                    <div className="chattingBtnBox">
                        <button className="sendBtn" type="submit">보내기</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChattingContent
