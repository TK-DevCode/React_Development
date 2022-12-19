import React, { useState } from "react";
import styles from "./UserList.module.css";
import NewUser from "./NewUser";

function UserList(props) {
  return (
    <div className={styles.container}> 

      {props.users.map((user) => (
        <NewUser 
            Name={user.Name} 
            Age={user.Age} 
            Key={user.Key} />
      ))}
      
    </div>
  );
}
export default UserList;
