import React from 'react'

export const Mortage = () => {
    const calculateMortgage = () => {
        const principal = parseFloat(document.getElementById('principal').value);
        const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);
        const years = parseFloat(document.getElementById('years').value);
    
        if (isNaN(principal) || isNaN(annualInterestRate) || isNaN(years)) {
            alert("Please enter valid numbers in all fields.");
            return;
        }
    
        const monthlyInterestRate = annualInterestRate / 100 / 12;
        const numberOfPayments = years * 12;
    
        const monthlyPayment = (principal * monthlyInterestRate) / 
            (1 - Math.pow((1 + monthlyInterestRate), -numberOfPayments));
    
        document.getElementById('result').textContent = `₹${monthlyPayment.toFixed(2)}`;
    }

    return (
        <div className="calculator">
            <h1>Mortgage Calculator</h1>
            <div className="form-group">
                <label htmlFor="principal">Loan Amount (₹):</label>
                <input type="number" id="principal" placeholder="Enter loan amount" />
            </div>
            <div className="form-group">
                <label htmlFor="annualInterestRate">Annual Interest Rate (%):</label>
                <input type="number" id="annualInterestRate" placeholder="Enter interest rate" step="0.01" />
            </div>
            <div className="form-group">
                <label htmlFor="years">Loan Term (years):</label>
                <input type="number" id="years" placeholder="Enter loan term" />
            </div>
            <button onClick={calculateMortgage}>Calculate</button>
            <div id="result"></div>
            <style jsx>{`
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #f0f0f0;
                    margin: 0;
                }

                .calculator {
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    width: 300px;
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
                }

                input {
                    width: 100%;
                    padding: 8px;
                    box-sizing: border-box;
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
                }

                button:hover {
                    background-color: #0056b3;
                }

                #result {
                    margin-top: 20px;
                    font-size: 18px;
                    color: #333;
                }
            `}</style>
        </div>
    )
}
