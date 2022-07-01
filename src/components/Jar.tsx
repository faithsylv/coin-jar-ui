import { useState } from 'react'

type JarProps = {
  jar: JarObject
}

type JarObject = {
  id: number
  name: string
  balance: number
  currency: string
}

export default function Jar({ jar }: JarProps) {
  const [depositAmount, setDepositAmount] = useState(0)
  const [balance, setBalance] = useState(jar.balance)

  console.log(typeof(jar.balance))

  const handleAmountChange = (event: any) => {
    if(parseInt(event.target.value)) {
      setDepositAmount(parseInt(event.target.value))
    }
    console.log(event.target.value)
  }

  const handleDeposit = (event: any) => {
    alert('You deposited ' + event.target[0].value + ' cents');
    setBalance(balance + depositAmount)
    console.log('click', event.target[0].value)
    event.preventDefault()
  }

  return(
    <div style={{border: '10px solid blue', margin: '10px', padding: '10px', display: 'inline-block'}}>
      <p>{jar.name}</p>
      <p>Balance: {balance} {jar.currency}</p>
      <form onSubmit={handleDeposit}>
        <label>
          Amount:
          <input type="text" onChange={handleAmountChange} />
        </label>
        <input type="submit" value="Deposit" />
      </form>
    </div> 
  )
}