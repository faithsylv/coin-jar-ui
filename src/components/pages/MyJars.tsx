import { useEffect, useState } from "react";

import Jar from '../Jar'

type jar = {
  created_at: string
  currency: string
  description: string
  id: number
  name: string
  balance: number
  updated_at: string
};

export default function MyJars() {
  const [jarList, setJarList] = useState<jar[]>([])
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:3001/jars')
      const json = await data.json()
      setJarList(json.jars)
    }
    fetchData()
  }, []);

  return (
    <>
    <h2>MY JARS</h2>
    {jarList.map((jar) => (
      <Jar key={jar.id} jar={jar}/>
    ))}
    </>
  )
}





