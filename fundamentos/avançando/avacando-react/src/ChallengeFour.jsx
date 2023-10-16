const ChallengeFour = ({key, name, age, job}) => {


  return (
    <div>
     
       <h2> {name} </h2>
       <h2> Idade {age}</h2>
       <p> Profissão: {job}</p>
        {(age >= 18) ? <p>PODE TIRAR HABILITAÇÃO</p> : <p> NÃO PODE TIRAR HABILITAÇÃO</p>}
      
    </div>
  )
}

export default ChallengeFour
