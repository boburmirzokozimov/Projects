import React, { useContext } from "react";
import { userNameContext, userSurnameContext } from '../App.js'


function UseContextC() {

    const userName = useContext(userNameContext)
    const userSurname = useContext(userSurnameContext)
    
    return <div>
        {userName} - {userSurname}
    </div>;
}

export default UseContextC;
