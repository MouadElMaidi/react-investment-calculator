import React from "react";

const ResultsItem = (props) => {
  const {
    year,
    savingsEndOfYear,
    yearlyInterest,
    totalInterest,
    investedCapital,
  } = props.yearData;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <tr>
      <td>{year}</td>
      <td>{formatter.format(savingsEndOfYear)}</td>
      <td>{formatter.format(yearlyInterest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(investedCapital)}</td>
    </tr>
  );
};

export default ResultsItem;
