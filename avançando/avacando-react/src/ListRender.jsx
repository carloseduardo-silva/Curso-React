import { useState } from "react"

const ListRender = () => {


    const [users, setUsers] = useState([
        {id:1, name:'Carlos', age:18},
        {id:2, name:'Santos Doumont', age:63},
        {id:3, name:'Robert Deniro', age:44}
    ])

    const deleteRandom = () =>{

        const randomnumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) =>{
            console.log(prevUsers)
        return prevUsers.filter((user) => randomnumber !== user.id)

        })


    }


  return (
    <div>

  

        <ul> 
            {users.map((user) =>(
                <li key = {user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
      
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender
