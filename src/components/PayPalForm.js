import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PayPalForm = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(130);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your PayPal email.");
      return;
    }
    alert(`Redirecting to PayPal for a payment of ₱${amount}.`);
    navigate("/confirmation");
  };

  return (
    <div className="paypal-form-container">
      <h2 className="text-center mb-4">Pay with PayPal</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="mb-3">
          <label htmlFor="paypal-email" className="form-label">PayPal Email</label>
          <input
            type="email"
            className="form-control"
            id="paypal-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your PayPal email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="payment-amount" className="form-label">Payment Amount</label>
          <select
            id="payment-amount"
            className="form-select"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          >
            <option value={130}>₱130 - Monthly Plan</option>
            <option value={1500}>₱1500 - Annual Plan</option>
          </select>
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary w-100 mt-3">Proceed to PayPal</button>
      </form>
    </div>
  );
};

export default PayPalForm;
