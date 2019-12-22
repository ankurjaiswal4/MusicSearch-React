import React from 'react';

const user = {
    name: 'Test User',
    age: 21,
    loggedIn: true
}

const UserContext = React.createContext(user);

export default UserContext;