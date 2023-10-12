import React, { useState } from 'react';


const MainContext = React.createContext();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [group, setGroup] = useState(null);

    const value = { user, setUser, group, setGroup };
    return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}

const useMainContext = () => {
    const context = React.useContext(MainContext);
    if(context === undefined) {
        throw new Error('useContext most be used withinv a ContextProvider');
    }
    return context;
}

export { useMainContext, ContextProvider };