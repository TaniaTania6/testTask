import React, { createContext, useState, useMemo, useCallback } from "react";

export const ContextProfile = createContext();

export const ProfileProvider = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return(
        <ContextProfile.Provider value={{name, setName, email, setEmail}}>
            {props.children}
        </ContextProfile.Provider>
    )
}