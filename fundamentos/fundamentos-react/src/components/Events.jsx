
const Events = () => {

    const handleClick = (e) =>{
      console.log(e)
        console.log('its working!!!')
    }

  return (
    <div>
        
        <button onClick={handleClick}> Clique aqui</button>

    </div>
  )
}

export default Events
