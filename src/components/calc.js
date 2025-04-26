import React, { useState } from "react";
import "./calc.css";

function TipCalculator() {
  const [purchase, setPurchase] = useState("");
  const tip = purchase >= 1000 ? Math.floor(purchase / 1000) * 50 : 0;
  const total = Number(purchase) + tip;

  return (
    <div className="main-tip">
      <h2>Tip Calculator💵</h2>
      <div className="input-section">
        <label>Bill Amount:</label>
        <input
          type="number"
          value={purchase}
          onChange={(e) => setPurchase(e.target.value)}
          placeholder="Enter amount here"
        />
      </div>
      <div className="results">
        <div className="result-item">
          <strong>Calculated Tip:</strong> ${tip}
        </div>
        <div className="result-item">
          <strong>Total to Pay:</strong> ${isNaN(total) ? 0 : total}
        </div>
      </div>
    </div>
  );
}

export default TipCalculator;

