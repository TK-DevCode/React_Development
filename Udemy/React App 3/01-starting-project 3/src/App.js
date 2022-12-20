import React, { useState } from "react";
import AddUserForm from "./Components/AddUserForm";
import UserList from "./Components/UserList";

function App() {
  const Dummy_Users = [
    {
      Name: "Tiaan Kemp",
      Age: 27,
      Key: 0,
    },

    {
      Name: "Cheney Kemp",
      Age: 26,
      Key: 1,
    },

  ];

  const [newAddedUser, userAdded] = useState(Dummy_Users); // this use state is used to re-render the page when a new user is added to the list

  function addUserDataHandler(newUser) {
    // This is the Handler to register new users being added, 
    //this handler is used to pass the info from the user form to the list of all users .Via the App.js file
    userAdded((prev_users) => {
      return [newUser, ...prev_users]; // This special function adds the previous values stored in userAdded/newAddedUser and add the new value specified, in this case newUser
    });
  }

  return (
    <div>
      <AddUserForm onAddUserData={addUserDataHandler} />
      <UserList users={newAddedUser} />      
    </div>
  );
}

export default App;
