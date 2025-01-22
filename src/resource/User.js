import React, { createContext, useContext, useState } from "react";

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([
        { id: "1234", nick: "유경", profileImage: "../icon/how2.jpg", email: "user@email.com", posts: [] },
        { id: "5678", nick: "다른 유저", profileImage: "../icon/how4.jpg", email: "user2@email.com", posts: [] },
    ]);

    return (
        <UsersContext.Provider value={users}>
            {children}
        </UsersContext.Provider>
    );
};

export const useUsers = () => useContext(UsersContext);
