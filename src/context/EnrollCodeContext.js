import React, {useReducer, createContext, useContext} from 'react'

const EnrollCodes = [
    {
        id: 1,
        code: 2423,
        success: true,
        rank: 11
    },
    {
        id: 2,
        code: 1023,
        success: false,
        rank: 45
    },
    {
        id: 3,
        code: 2305,
        success: true,
        rank: 2
    },
    {
        id: 4,
        code: 1564,
        success: false,
        rank: 35
    },{
        id: 5,
        code: 3784,
        success: true,
        rank: 12
    }
]


function enrollCodeReducer(state, action) {
    switch(action.type) {
        default:
          throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const EnrollCodeStateContext = createContext();
const EnrollCodeDispatchContext = createContext();

export function EnrollCodeProvider({ children }) {
    const [state, dispatch] = useReducer(enrollCodeReducer, EnrollCodes);
    return (
        <EnrollCodeStateContext.Provider value={state}>
            <EnrollCodeDispatchContext.Provider value={dispatch}>
                {children}
            </EnrollCodeDispatchContext.Provider>
        </EnrollCodeStateContext.Provider>
    )
}


export function useEnrollCodeState() {
    const context = useContext(EnrollCodeStateContext);
    if (!context) {
        throw new Error('Cannot find CodeStateProvider');
    }
    return context;
}

export function useEnrollCodeDispatch() {
    const context = useContext(EnrollCodeDispatchContext);
    if (!context) {
        throw new Error('Cannot find CodeDispatchProvider');
    }
    return context;
}