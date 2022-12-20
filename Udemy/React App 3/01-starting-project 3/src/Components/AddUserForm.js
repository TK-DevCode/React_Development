import React, { useState } from "react";
import styles from "./AddUserForm.module.css";
import ErrorModule from "./ErrorModal";

function AddUserForm(props) {
  const [NameEntered, UserNameEntered] = useState("");
  const [AgeEntered, UserAgeEntered] = useState(0);
  const [submitTrigger, FormSubmitted] = useState(false);

  const newUser = {
    Name: NameEntered,
    Age: AgeEntered,
    Key: Math.random(), // Each element should have a unique ID key
  };

  // Event Handlers
  function UserNameHandler(event) {
    UserNameEntered(event.target.value);
  }

  function UserAgeHandler(event) {
    UserAgeEntered(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    // By default a button placed inside a form will act as a submit button and reload the browser
    // By page will reload because of a request being sent to the sever to submit the form
    // But we don't want that, we want to control the submit with JavaScript

    newUser.Name = NameEntered;
    newUser.Age = AgeEntered;

    if (NameEntered.length > 0 && AgeEntered > 0) {
      props.onAddUserData(newUser);
    }
    UserNameEntered("");
    UserAgeEntered(0);
  }

  function SubmitTrig() {
    if (NameEntered.length == 0 && AgeEntered == 0) {
      FormSubmitted(true);
    } else {
      FormSubmitted(false);
    }
  }

  function confirmHandler(value){
    FormSubmitted(value);
  };

  return (
    <div className={styles.container}>
      <div className={!submitTrigger && styles.error}>
        <ErrorModule
          title="An Error occured in entering the new User Data!"
          message="Invalid User Added"
          onConfirm={confirmHandler}
        />
      </div>

      <form onSubmit={submitHandler}>
        <label>
          <h3 className={styles.title}>User Name</h3>
        </label>
        <div>
          <input
            type="text"
            placeholder="Please input new user's Name"
            value={NameEntered}
            onChange={UserNameHandler}
          ></input>
        </div>
        <label>
          <h3 className={styles.title}>User Age</h3>
        </label>
        <div>
          <input
            type="number"
            placeholder="Please input new user's Age"
            value={AgeEntered}
            min="0"
            step="1"
            onChange={UserAgeHandler}
          ></input>
        </div>
        <div className={styles.newUser__action}>
          <button
            className={styles.addUserButton}
            type="submit"
            onClick={SubmitTrig}
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUserForm;
