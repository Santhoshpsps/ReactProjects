import React from "react";

import NewForm from "./NewForm";
import './NewUser.css'
const NewUser=(props)=>{
    const savedUserDataHandler =(data)=>{
        const userData ={
            ...data,
            id: Math.random().toString(),
        }
        props.newuserData(userData);
    }
    return(
        <div className="new-user">
            <NewForm onSaveUserData = {savedUserDataHandler}></NewForm>
        </div>
    )
}

export default NewUser;