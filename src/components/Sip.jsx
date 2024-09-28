import React from 'react'

export const Sip = () => {
  const calculateSIP = () => {
    const monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value);
    const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);
    const years = parseFloat(document.getElementById('years').value);

    if (isNaN(monthlyInvestment) || isNaN(annualInterestRate) || isNaN(years) || monthlyInvestment <= 0 || annualInterestRate <= 0 || years <= 0) {
        alert("Please enter valid positive numbers in all fields.");
        return;
    }

    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfMonths = years * 12;

    let futureValue = 0;

    for (let i = 0; i < numberOfMonths; i++) {
        futureValue = (futureValue + monthlyInvestment) * (1 + monthlyInterestRate);
    }

    document.getElementById('result').textContent = `₹  ${futureValue.toFixed(2)}`;

  }

  return (
    <div className="calculator">
      <h1>SIP Calculator</h1>
      <div className="form-group">
        <label htmlFor="monthlyInvestment">Monthly Investment (₹):</label>
        <input type="number" id="monthlyInvestment" placeholder="Enter monthly investment" />
      </div>
      <div className="form-group">
        <label htmlFor="annualInterestRate">Annual Interest Rate (%):</label>
        <input type="number" id="annualInterestRate" placeholder="Enter interest rate" step="0.01" />
      </div>
      <div className="form-group">
        <label htmlFor="years">Investment Period (years):</label>
        <input type="number" id="years" placeholder="Enter investment period" />
      </div>
      <button onClick={calculateSIP}>Calculate</button>
      <div id="result"></div>
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: white;
          margin: 0;
        }
        
        .calculator {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          text-align: center;
          width: 350px;
          transition: transform 0.3s ease-in-out;
        }
        
        .calculator:hover {
          transform: translateY(-5px);
        }
        
        h1 {
          margin-bottom: 20px;
          color: #007BFF;
        }
        
        .form-group {
          margin-bottom: 15px;
        }
        
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #333;
        }
        
        input {
          width: 100%;
          padding: 10px;
          box-sizing: border-box;
          border: 2px solid #ddd;
          border-radius: 5px;
          transition: border-color 0.3s ease-in-out;
        }
        
        input:focus {
          border-color: #007BFF;
        }
        
        button {
          background-color: #007BFF;
          color: #fff;
          border: none;
          padding: 10px;
          cursor: pointer;
          width: 100%;
          border-radius: 5px;
          font-size: 16px;
          transition: background-color 0.3s ease-in-out;
        }
        
        button:hover {
          background-color: #0056b3;
        }
        
        #result {
          margin-top: 20px;
          font-size: 18px;
          color: #333;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}
