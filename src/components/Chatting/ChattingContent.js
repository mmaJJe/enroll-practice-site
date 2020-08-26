import React, {useState} from 'react'

import './ChattingContent.css'

// import {RadioButtonUnchecked, Clear} from '@material-ui/icons'; 


function ChattingContent() {
    const [chatInput, setChatInput] = useState({chat: ""})

    const onChatInputChage = e =>{
        const { name, value } = e.target;
        setChatInput({[name]:value});
    };


    return (
        <div className="chattingContent">
            <div className="chatting">
            </div>
            <div className="chattingForm">
                <form>
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
