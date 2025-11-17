# Currency Converter App - React SBA

A modern, real-time currency converter application built with React, Vite, HTML, CSS, and JavaScript. This project uses the ExchangeRate-API to fetch live exchange rates and perform currency conversions.

## Features

- **Real-Time Exchange Rates**: Fetches live currency conversion rates from ExchangeRate-API
- **AJAX Integration**: Uses async/await fetch API to retrieve data from external API
- **Interactive UI**: Clean, modern interface with smooth animations
- **Currency Swap**: Quick button to swap between currencies
- **10 Popular Currencies**: Support for USD, EUR, GBP, JPY, CAD, AUD, CHF, CNY, INR, MXN
- **Live Conversion**: Automatic calculation as you type
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: Graceful error messages for API failures

## Technologies Used

- **React**: Component-based UI library
- **Vite**: Fast build tool and development server
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript ES6+**: Modern JavaScript features (async/await, arrow functions, destructuring)
- **ExchangeRate-API**: External data source for real-time exchange rates

## API Information

**API Provider**: ExchangeRate-API  
**API Endpoint**: `https://v6.exchangerate-api.com/v6/`  
**API Key**: `0b510a2d66d0ad86********` (masked for security)  
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

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

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

## Project Structure

```
react_sba/
├── src/
│   ├── components/
│   │   ├── CurrencyConverter.jsx    # Main converter component
│   │   └── CurrencyConverter.css    # Component styles
│   ├── App.jsx                      # Root component
│   ├── App.css                      # App styles
│   └── main.jsx                     # Entry point
├── index.html                       # HTML template
├── package.json                     # Dependencies
└── vite.config.js                  # Vite configuration
```

## Key React Concepts Demonstrated

### State Management
- `useState` for managing component state (amount, currencies, rates)
- Multiple state variables for different data types

### Side Effects
- `useEffect` for fetching data on component mount
- `useEffect` for calculating conversions when dependencies change
- Proper cleanup and dependency arrays

### AJAX/API Integration
```javascript
const fetchExchangeRates = async () => {
  try {
    const response = await fetch(`${API_URL}${fromCurrency}`);
    const data = await response.json();
    
    if (data.result === 'success') {
      setExchangeRates(data.conversion_rates);
      setLastUpdated(data.time_last_update_utc);
    }
  } catch (err) {
    setError(err.message);
  }
};
```

### Event Handling
- Input change handlers
- Button click handlers
- Form interactions

### Conditional Rendering
- Loading states
- Error messages
- Dynamic content display

## CSS Features

- **Gradient Backgrounds**: Modern purple gradient design
- **Flexbox Layout**: Responsive and flexible layouts
- **Custom Styling**: Custom select dropdowns, buttons, and inputs


## Assignment Requirements Met

✅ **HTML**: Semantic HTML5 structure in JSX  
✅ **CSS**: Modern, responsive styling with animations  
✅ **JavaScript**: ES6+ features, async/await, event handling  
✅ **React**: Components, hooks (useState, useEffect), props  
✅ **AJAX**: Fetch API to retrieve data from external source  
✅ **API Integration**: ExchangeRate-API with API key  
✅ **DOM Manipulation**: React's virtual DOM updates  
✅ **External Data**: Live exchange rates inserted into DOM  

## Notes

- The application fetches fresh exchange rates whenever the base currency changes
- Conversions are calculated instantly as you type
- The last update timestamp shows when the exchange rates were last refreshed by the API
- Error handling ensures a good user experience even when the API is unavailable

---


