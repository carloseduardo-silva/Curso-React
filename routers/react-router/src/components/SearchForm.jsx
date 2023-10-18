
import {useNavigate} from 'react-router-dom'

import { useState } from 'react'

const SearchForm = () => {

    const navigate = useNavigate()

    const [query, setQuery] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()

        navigate('/search?q=' + query)


    }

  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <label >
                <input type="text" onChange={
                    (e) => setQuery(e.target.value)}  />
                <input type="submit" value="Buscar" />
            </label>

        </form>
      
    </div>
  )
}

export default SearchForm
