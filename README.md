# Currency Converter React App

This is a simple currency converter web application built with **React** and **Vite**. It allows users to convert an amount from one currency to another using real-time exchange rates fetched from the [ExchangeRate-API](https://www.exchangerate-api.com/).

---

## Features

- **Live Currency Conversion:**  
  Converts between any two currencies using up-to-date rates from an external API.

- **Swap Functionality:**  
  Instantly swap the "from" and "to" currencies and their values.

- **Responsive UI:**  
  Built with [Tailwind CSS](https://tailwindcss.com/) for a modern, responsive design.



## Project Structure

```
src/
  App.jsx              # Main application component
  main.jsx             # Entry point
  index.css            # Tailwind and global styles
  components/
    InputBox.jsx       # Reusable input/select component for currency and amount
    index.js           # Component exports
  hooks/
    useCurrencyInfo.js # Custom hook for fetching currency rates
assets/
  react.svg            # Example asset
```

---

## How It Works

- The main component (`App.jsx`) manages the state for the amount, selected currencies, and conversion result.
- The custom hook [`useCurrencyInfo`](src/hooks/useCurrencyInfo.js) fetches the latest conversion rates for the selected "from" currency.
- The [`InputBox`](src/components/InputBox.jsx) component is used for both the "from" and "to" currency selectors.
- When the user enters an amount and selects currencies, clicking "Convert" calculates the result using the fetched rates.
- The "Swap" button exchanges the "from" and "to" currencies and their values.



## About the Custom Hook: `useCurrencyInfo`

The custom hook [`useCurrencyInfo`](src/hooks/useCurrencyInfo.js) is used to fetch the latest currency conversion rates from the ExchangeRate-API based on the selected "from" currency.

**How it works:**
- Takes the base currency as an argument.
- Fetches real-time conversion rates from the API whenever the base currency changes.
- Returns an object with all available currency rates, which is used to populate the dropdowns and perform conversions.

**Why use a custom hook?**
- Keeps API logic separate from UI components.
- Makes the code reusable and easier to maintain.
- Automatically updates rates when the selected currency changes.


## Customization

- **API Key:**  
  The API key for ExchangeRate-API is hardcoded in [`useCurrencyInfo.js`](src/hooks/useCurrencyInfo.js).  
  Replace it with your own key for production use.


