import React, {useReducer, useRef, createContext, useContext} from 'react'

const initChats = [
    {
        id: 1,
        text: "hello world"
    },
    {
        id: 2,
        text: "예시 대화 내용"
    }
]



function chattingReducer(state, action) {
    switch(action.type) {
        case 'CHAT':
          return state.concat(action.chat);
        default:
          throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const ChatStateContext = createContext();
const ChatDispatchContext = createContext();
const ChatNextIdContext = createContext();

export function ChattingProvider({ children }) {
    const [state, dispatch] = useReducer(chattingReducer, initChats);
    const nextId = useRef(3);
    return (
        <ChatStateContext.Provider value={state}>
            <ChatDispatchContext.Provider value={dispatch}>
                <ChatNextIdContext.Provider value={nextId}>
                    {children}
                </ChatNextIdContext.Provider>
            </ChatDispatchContext.Provider>
        </ChatStateContext.Provider>
    )
}

export function useChatDispatch() {
    const context = useContext(ChatDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useChatState() {
    const context = useContext(ChatStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useChatNextId() {
    const context = useContext(ChatNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}
