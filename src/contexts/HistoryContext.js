import React, { useState, createContext } from "react";

const HistoryContext = createContext();

export const HistoryContextProvider = ({ children }) => {
    const [gifHistory, setGifHistory] = useState([]);

    return (
        <HistoryContext.Provider value={{
            gifHistory,
            setGifHistory
        }}>
            {children}
        </HistoryContext.Provider>
    );
};

export default HistoryContext;
