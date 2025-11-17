# Currency Converter App - React SBA

A modern, real-time currency converter application built with React, Vite, HTML, CSS, and JavaScript. This project uses the ExchangeRate-API to fetch live exchange rates and perform currency conversions.

## Features

- **Real-Time Exchange Rates**: Fetches live currency conversion rates from ExchangeRate-API
- **AJAX Integration**: Uses async/await fetch API to retrieve data from external API
- **Currency Swap**: Quick button to swap between currencies
- **10 Popular Currencies**: Support for USD, EUR, GBP, JPY, CAD, AUD, CHF, CNY, INR, MXN
- **Live Conversion**: Automatic calculation as you type

## Technologies Used

- **React**: Component-based UI library
- **HTML5**: Semantic markup
- **JavaScript ES6+**: Modern JavaScript features (async/await, arrow functions, destructuring)
- **ExchangeRate-API**: External data source for real-time exchange rates

## API Information

**API Provider**: ExchangeRate-API  
**API Endpoint**: `https://v6.exchangerate-api.com/v6/`  
**API Key**: `0b510a2d66d0ad86********` 
**Documentation**: https://www.exchangerate-api.com/docs/overview

### API Response Structure
```json
{
  "result": "success",
  "base_code": "USD",
  "conversion_rates": {
    "EUR": 0.8605,
    "GBP": 0.7596,
    "JPY": 154.4657,
    ...
  },
  "time_last_update_utc": "Sun, 16 Nov 2025 00:00:02 +0000"
}
```

## Running the Application

### Installation & Setup

1. Navigate to the project directory:
```bash
cd sba_320/react_sba
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```
(If port 5173 is in use, Vite will automatically use the next available port)


## Key React Concepts Demonstrated

### State Management
- `useState` for managing component state (amount, currencies, rates)
- Multiple state variables for different data types

### Side Effects
- `useEffect` for fetching data on component mount
- `useEffect` for calculating conversions when dependencies change
- Proper cleanup and dependency arrays


### Event Handling
- Input change handlers
- Button click handlers
- Form interactions

### Conditional Rendering
- Loading states
- Error messages
- Dynamic content display



