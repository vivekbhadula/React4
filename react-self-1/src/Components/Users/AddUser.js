import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

function AddUser() {
  const [nameChange, setNameChange] = useState("");
  const [ageChange, setAgeChange] = useState("");
  const [sexChange, setSexChange] = useState("");

  function nameChangeHandler(event) {
    setNameChange(event.target.value);
  }

  function ageChangeHandler(event) {
    setAgeChange(event.target.value);
  }

  function sexChangeHandler(event) {
    setSexChange(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    if (
      nameChange.trim().length === 0 ||
      ageChange.trim().length === 0 ||
      sexChange.trim().length === 0
    ) {
      return;
    }
    if (ageChange.value <= 0) {
      return;
    }
    console.log(nameChange, sexChange, ageChange);
  }

  return (
    <Card className={`${styles["form-head"]}`}>
      <form onSubmit={formSubmitHandler} className={styles["form-component"]}>
        <label>Name</label>
        <input
          type="text"
          value={nameChange}
          onChange={nameChangeHandler}
        ></input>
        <label>Age</label>
        <input
          type="number"
          value={ageChange}
          onChange={ageChangeHandler}
        ></input>
        <label>Sex</label>
        <input
          type="text"
          value={sexChange}
          onChange={sexChangeHandler}
        ></input>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
}

export default AddUser;
