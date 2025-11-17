import { useState, useEffect } from 'react';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRates, setExchangeRates] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState('');

  const API_KEY = '0b510a2d66d0ad8646f65d87';
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

  // Popular currencies for quick selection
  const popularCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'INR', 'MXN'];

  // Fetch exchange rates when fromCurrency changes
  useEffect(() => {
    fetchExchangeRates();
  }, [fromCurrency]);

  // Calculate conversion when amount, rates, or currencies change
  useEffect(() => {
    if (exchangeRates[toCurrency]) {
      const result = amount * exchangeRates[toCurrency];
      setConvertedAmount(result.toFixed(2));
    }
  }, [amount, exchangeRates, toCurrency]);

  // AJAX call to fetch exchange rates from API
  const fetchExchangeRates = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}${fromCurrency}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }

      const data = await response.json();

      if (data.result === 'success') {
        setExchangeRates(data.conversion_rates);
        setLastUpdated(data.time_last_update_utc);
      } else {
        throw new Error('API returned an error');
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching exchange rates:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || parseFloat(value) >= 0) {
      setAmount(value === '' ? 0 : parseFloat(value));
    }
  };

  return (
    <div className="currency-converter">
      <div className="converter-container">
        <h1 className="converter-title"> Currency Converter</h1>
        <p className="converter-subtitle">Real-time Exchange Rates</p>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div className="converter-form">
          {/* Amount Input */}
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              min="0"
              step="0.01"
              placeholder="Enter amount"
              className="amount-input"
            />
          </div>

          {/* From Currency */}
          <div className="currency-group">
            <div className="form-group">
              <label htmlFor="fromCurrency">From</label>
              <select
                id="fromCurrency"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="currency-select"
                disabled={loading}
              >
                {popularCurrencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <button
              onClick={handleSwapCurrencies}
              className="swap-button"
              disabled={loading}
              title="Swap currencies"
            >
              ⇄
            </button>

            {/* To Currency */}
            <div className="form-group">
              <label htmlFor="toCurrency">To</label>
              <select
                id="toCurrency"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="currency-select"
                disabled={loading}
              >
                {popularCurrencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Conversion Result */}
          <div className="result-container">
            {loading ? (
              <div className="loading">Loading exchange rates...</div>
            ) : (
              <>
                <div className="result-box">
                  <span className="result-amount">{amount}</span>
                  <span className="result-currency">{fromCurrency}</span>
                  <span className="result-equals">=</span>
                  <span className="result-amount converted">{convertedAmount}</span>
                  <span className="result-currency">{toCurrency}</span>
                </div>
                
                {exchangeRates[toCurrency] && (
                  <div className="exchange-rate-info">
                    1 {fromCurrency} = {exchangeRates[toCurrency].toFixed(4)} {toCurrency}
                  </div>
                )}
              </>
            )}
          </div>

          {lastUpdated && (
            <div className="last-updated">
              Last updated: {new Date(lastUpdated).toLocaleString()}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default CurrencyConverter;
