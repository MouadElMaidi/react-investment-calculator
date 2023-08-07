import React from "react";
import ResultsItem from "./ResultsItem";

import styles from "./ResultsList.module.css";

const ResultsList = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData, index) => (
          <ResultsItem yearData={yearData} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default ResultsList;
