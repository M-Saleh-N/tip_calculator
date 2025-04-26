import { useState } from "react";
import "./calc.css";

function TipCalculator() {
  const [purchase, setPurchase] = useState("");
  const tip = purchase >= 1000 ? Math.floor(purchase / 1000) * 50 : 0;
  const total = Number(purchase) + tip;
}

