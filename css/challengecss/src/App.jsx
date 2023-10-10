import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cars from './components/Cars'

function App() {
  const [count, setCount] = useState(0)

  const cars = [
    {id:1, name:'BMW AMG', color:'Red', year:2018},
    {id:2, name:'Ferrari', color:'Green', year:2022},
    {id:3, name:'Fusca', color:'Yellow', year:2007},
    {id:4, name:'Tesla ', color:'Blue', year:2025}
  ]

  return (


    <>

    <h1> My Cars </h1>
      <div className='cars-container'>
        {cars.map(car => (
          console.log(car),
          <Cars
          key={car.id}
          name={car.name}
          color={car.color}
          year={car.year}  />
        ))}
      </div>
    </>
  )
}

export default App
