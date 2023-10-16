import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import eu from "./assets/perfil-blue.jpg"
import ManageData from './ManageData'
import ListRender from './ListRender'
import Conditional from './Conditional'
import ShowUserName from './ShowUserName'
import CarDetails from './CarDetails'
import FragmentTest from './FragmentTest'
import Container from './Container'
import ExecuteFunction from './ExecuteFunction'
import Message from './Message'
import ChangeMessageState from './ChangeMessageState'
import ChallengeFour from './ChallengeFour'

function App() {
  const [count, setCount] = useState(0)

  const [username] = useState('Maria')

  const cars = [
    {id: 1, brand:'Ferrari', color:'Azul', newCar:true, km:0},
    {id: 2, brand:'Audi', color:'Vermelho', newCar:false, km:10000},
    {id: 3, brand:'Mercedes', color:'Preto', newCar:false, km:25000},
    {id: 4, brand:'Lamborguini', color:'Branco', newCar:true, km:0}
  ]

  const [message, setMessage] = useState()

  const people = [
    {id:1, name:"Carlos Eduardo", age:'19', profession:'Developer'},
    {id:2, name:"Julio César", age:'28', profession:'Trader'},
    {id:3, name:"Renata Cabral", age:'16', profession:'VIP Person'},
    {id:4, name:"Julia Ribeiro", age:'17', profession:'Waitress'},]

  const handleMessage = (msg) =>{
    setMessage(msg)
  }

  return (
    <>
      <h1>Avançando em React</h1>

      <div>
        <h2>Lindão no preto logo abaixo:</h2>
        <img src="/images/perfil-black.jpg" alt="eu" />
      </div>
      
      <div>
      <h2> Lindão no azul logo abaixo</h2>
      <img src={eu} alt="eu" />
      </div>

      <ManageData/>
      <ListRender/>
      <Conditional/>
      <ShowUserName name={username}/>
      <CarDetails brand='BMW X1' km={10000} color='Azul' newCar={false} />
      <CarDetails brand='Audi' km={0} color='Branca' newCar={true} />
      <CarDetails brand='Mercedes SLK200' km={6000} color='Verde' newCar={false} />

    {cars.map((car) =>(
      <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}  />
    ))}

    <FragmentTest propFragment={'Testando'} />
   
    <Container myValue ='22'>
      <h3>Children Props</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam aliquid animi esse molestias. Repudiandae quas, quod tempora cum magni fugiat, corrupti unde consectetur placeat consequuntur laborum debitis reiciendis tempore quae.</p>
      </Container> 

      <ExecuteFunction myFunction={() =>{
        console.log('Função por props')
    
      }}/>

      <Message msg={message}/>

      <ChangeMessageState handleMessage={handleMessage}/>

      {people.map(person =>(
        <ChallengeFour 
        key={person.key}
        name={person.name}
        age={person.age}
        job={person.profession}
        />
        ))}



    </>
  )
}

export default App
