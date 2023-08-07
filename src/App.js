import React, { useState } from "react";

import logo from "./assets/investment-calculator-logo.png";
import ResultsList from "./components/ResultsList";
import UserInput from "./components/UserInput";

function App() {
  const [results, setResults] = useState([]);

  const parsedResult = results.map((element, index) => {
    if (index === 0) {
      element.totalInterest = element.yearlyInterest;
    } else {
      element.totalInterest =
        results[index - 1].totalInterest + element.yearlyInterest;
    }
    element.investedCapital = element.savingsEndOfYear - element.totalInterest;
    return element;
  });

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlySavings"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedInterest"] / 100;
    const duration = +userInput["investmentDuration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    setResults(yearlyData);
  };

  //Event Handlers
  const submitHandler = (input) => {
    calculateHandler(input);
  };

  const resetHandler = () => {
    setResults([]);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <UserInput onSubmitForm={submitHandler} onResetData={resetHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {results.length === 0 ? (
        <p className="header">No investment calculated yet</p>
      ) : (
        <ResultsList data={parsedResult} />
      )}
    </div>
  );
}

export default App;
