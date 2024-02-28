import React from 'react'
import { useState } from 'react'


//were declaring a function that return our usestate values
const UserHooks = () => {

    //declaring user as a state variable and seruser as the setter function with the initial value of object
    const [user, setUser] = useState({});

    return { user, setUser }
}

export default UserHooks
