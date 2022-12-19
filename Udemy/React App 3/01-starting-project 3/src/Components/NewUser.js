import React, {useState} from "react";
import styles from "./NewUser.module.css"


function NewUser(props){

    return(
        <div className={styles.userEntry}>
            <h3>User Name: {props.Name}</h3>
            <h3>Age: {props.Age}</h3>
        </div>
    );
};

export default NewUser;