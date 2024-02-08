import './App.css'


import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent, { Category } from './components/ThirdComponent'
import State from './components/State'
import Context from './components/Context'

import { createContext } from 'react'


interface IAppContext{
  language:string,
  framework:string,
  projects:number
 }

export const AppContext = createContext<IAppContext | null>(null);

function App() {

  const name: string = 'Carlos Eduardo';
  const age: number = 19;
  const isWorking: boolean = true;


  const userGreating = (name:string) =>{

    return `Olá, ${name}`
  }


  const userAge = (age:number) =>{

    return `Tenho ${age} anos.`
  }


  //TYPES
 type TextorNull = string | null;
 type fixed = '2 uva' | '3 pera'

 const frutas:fixed = '3 pera'
 const texto:TextorNull = 'oi'



 //CONTEXT
 const contextValue:IAppContext = {
  language:'JavaScript',
  framework: 'TypeScript',
  projects: 5
 }

 const contextValue2:IAppContext = {
  language:'JavaScript',
  framework: 'Next.js',
  projects: 2
 }

  return (
    <>
    <AppContext.Provider value={contextValue}>
        <h1>React com TypeScript</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p> Está funcionando!</p>}
        <p>{frutas}</p>
        <p>{texto}</p>

        <h2>{userGreating(name)}</h2>
        <p>{userAge(age)}</p>

        <FirstComponent></FirstComponent>
        <SecondComponent 
        name={'segundo'}/>

        <ThirdComponent 
        title='Primeiro Post' 
        content='Iniciando curso de React+TypeScript' 
        commentsQty={10} 
        tags={["react", "typescript"]}
        category={Category.TS}
        />
        

        <ThirdComponent 
        title='Segundo Post' 
        content='Iniciando curso de Next' 
        commentsQty={20} 
        tags={["next", "typescript"]}
        category={Category.N}/>

        <State/>

        <Context/>
      </AppContext.Provider>
    </>
  )
}

export default App
