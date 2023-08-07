import React, { useState } from "react";

import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [inputData, setInputData] = useState({
    currentSavings: 10000,
    yearlySavings: 1200,
    expectedInterest: 5,
    investmentDuration: 15,
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    props.onSubmitForm(inputData);
  };

  const resetHandler = () => {
    props.onResetData();
    setInputData({
      currentSavings: "",
      yearlySavings: "",
      expectedInterest: "",
      investmentDuration: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={inputChangeHandler}
            name="currentSavings"
            value={inputData.currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={inputChangeHandler}
            name="yearlySavings"
            value={inputData.yearlySavings}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={inputChangeHandler}
            name="expectedInterest"
            value={inputData.expectedInterest}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={inputChangeHandler}
            name="investmentDuration"
            value={inputData.investmentDuration}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
