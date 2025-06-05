import React, { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

const App = () => {
  const [amount, setAmount] = useState(0)
  const [form, setForm] = useState("usd")
  const [to, setTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(form)

  const options = Object.keys(currencyInfo)
  
  const swap = () => {
    setForm(to)
    setTo(form)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center  bg-center bg-cover bg-no-repeat'
    style={{
      backgroundImage: `url(https://i.pinimg.com/736x/3d/9c/29/3d9c297e87452a9edc6d8ee0ca58594d.jpg)`
    }}
    >
      <div className='w-full'>
        <div className="w-full max-w-md mx-auto border border-gray-100 rounded-lg p-5 backdrop-blur-lg bg-white/30  ">
          <form onSubmit={
            (e) => {
              e.preventDefault();
              convert()
            }}>

              <div className='w-full mb-1'>
                 <InputBox 
                    label="from"
                    amount={amount}
                    onAmountChange={(amount) => setAmount(amount)}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setForm(currency)}
                    selectCurrency={form}
                  />
              </div>

              <div className='relative w-full h-0.5'>
                  <button
                    type='button'
                    className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white text-white rounded-md bg-blue-600 px-2 py-0.5'
                    onClick={swap}
                  >
                    Swap
                  </button>
              </div>

              <div className='w-full mt-1 mb-5'>
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>

              <button 
                className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
                type='submit'
              >
                  Convert {form.toUpperCase()} To {to.toUpperCase()}
              </button>
            </form>
        </div>
      </div>
      
    </div>
  )
}

export default App