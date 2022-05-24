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
  return(
    <div style={{border: '10px solid blue', margin: '10px', padding: '10px', display: 'inline-block'}}>
      <p>{jar.name}</p>
      <p>Balance: {jar.balance} {jar.currency}</p>
      <button>Deposit</button>
    </div> 
  )
}