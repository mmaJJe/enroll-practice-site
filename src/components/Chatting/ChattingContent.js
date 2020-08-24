import React, {useState} from 'react'

import './ChattingContent.css'

// import {RadioButtonUnchecked, Clear} from '@material-ui/icons'; 



function ChattingPost({chats}) {
    return (
        <div className="chat">
            {chats.chat}
        </div>
    )
}

function ChattingContent() {
    const [chatLi, setChatLi] = useState([{chat: "hello world"}])
    const [chatInput, setChatInput] = useState({chat: ""})

    const onChatInputChage = e =>{
        const { name, value } = e.target;
        setChatInput({[name]:value});
    };

    const onChat = e => {
        e.preventDefault()
        setChatLi([...chatLi, chatInput])
        setChatInput({chat:""});
    }


    return (
        <div className="chattingContent">
            <div className="chatting">
                        {chatLi.map(chats => (
                    <ChattingPost chats={chats}/>
                ))}
            </div>
            <div className="chattingForm">
                <form onSubmit={onChat}>
                    <textarea name="chatText" value={chatInput.chat} onChange={onChatInputChage}/>
                    <div className="chattingBtnBox">
                        <button className="sendBtn" type="submit">보내기</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChattingContent
