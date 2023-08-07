import React from "react";

const ResultsItem = (props) => {
  const {
    year,
    savingsEndOfYear,
    yearlyInterest,
    totalInterest,
    investedCapital,
  } = props.yearData;

  return (
    <tr>
      <td>{year}</td>
      <td>${savingsEndOfYear.toFixed(2)}</td>
      <td>${yearlyInterest.toFixed(2)}</td>
      <td>${totalInterest.toFixed(2)}</td>
      <td>${investedCapital.toFixed(2)}</td>
    </tr>
  );
};

export default ResultsItem;
