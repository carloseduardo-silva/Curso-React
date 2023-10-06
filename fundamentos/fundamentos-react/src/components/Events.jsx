
const Events = () => {

    const handleClick = (e) =>{
      console.log(e)
        console.log('its working!!!')
    }

    const renderConditional = (x) =>{


      if(x){
          return <h1>X é verdadeiro</h1>
      }else{
        return <h1> X é falso</h1>
      }

    }

  return (
    <div>
        
        <button onClick={handleClick}> Clique aqui</button>

        <button onClick={()=>{console.log('clicou no inline')}} > Clique aqui no button online</button>

        {renderConditional(false)}

    </div>
  )
}

export default Events
