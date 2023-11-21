import React, { useState } from 'react'
import { useGraphGenerator } from '../hooks/useGraphGenerator'

const Config = () => {

    const [grauExp, setGrauExp] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [error, setError] = useState(null)

    const handleConfig = (e) =>{
        e.preventDefault()

        if(min >= max){
            setError('O investimento mínimo necessista ser menor que o investimento máximo!')
        } else{
            setError(null)
            const graphConfig = {
                grau: grauExp,
                min,
                max,
            }

            useGraphGenerator()

        }

        
       

    }

  return <div>

    <h3> Insira os dados de configuração do grafo:</h3>

    <form onSubmit={handleConfig}>
        <label>
            <p>Grau Exponencial de Conexão:</p>
            <input onChange={(e) =>{setGrauExp(e.target.value)}} min={2} type="number" />
        </label>

        <label>
            <p>Valor Mínimo de Investimento por membro:</p>
            <select  onChange={(e) =>{setMin(e.target.value)}} name="min" id="min">
                <option value="100">R$100</option>
                <option value="500">R$500</option>
                <option value="1000">R$1.000</option>
                <option value="5000">R$5.000</option>
                <option value="10000">R$10.000</option>
            </select>
        </label>

        <label>
            <p>Valor Maximo de Investimento por membro:</p>
            <select  onChange={(e) =>{setMax(e.target.value)}} name="max" id="max">
                <option value="1000">R$1.000</option>
                <option value="10000">R$10.000</option>
                <option value="50000">R$50.000</option>
                <option value="100000">R$100.000</option>
                <option value="200000">R$200.000</option>
            </select>
        </label>

        {error && <p className='error'>{error}</p>}
        <button type="submit">Gerar Grafo</button>
    </form>

  </div>
}

export default Config