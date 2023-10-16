
const ChangeMessageState = ({handleMessage}) => {

    const messages = ['Oi né', 'BonJour', 'Hello World']


  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>BR</button>
        <button onClick={() => handleMessage(messages[1])}>FR</button>
        <button onClick={() => handleMessage(messages[2])}>US</button>
      
    </div>
  )
}

export default ChangeMessageState
