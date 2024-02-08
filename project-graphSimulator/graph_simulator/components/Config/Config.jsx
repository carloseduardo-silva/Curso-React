import React, { useState, useContext } from 'react'
import {  useNavigate, Navigate } from 'react-router-dom'
import { Graphviz } from 'graphviz-react';

//css
import styles from './Config.module.css'

//hooks
import { useGraphGenerator } from '../../hooks/useGraphGenerator'
import { useSumPrejudice } from '../../hooks/useSumPrejudice';



const Config = () => {

    const [grauExp, setGrauExp] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [error, setError] = useState(null)
    const [totalM, setTotalM] = useState(1)
    const [totalPrejudice, setTotalPrejudice] = useState(1)
    const [showGraph, setShowGraph] = useState(null)
    const [showInfos, setShowInfos] = useState(false)
    const [lineGraph, setLineGraph] = useState(1)
    const [initialConfig, setinitialConfig] = useState(`digraph {
        Membro1;
        }` )
    
    


    const {loadGraph, loadNewMembers, getTotalMembers} = useGraphGenerator()

    const { loadPrejudice } = useSumPrejudice()

    //initializate the graph
    const handleConfig = (e) =>{
        e.preventDefault()

        if(min >= max){
            setError('O investimento mínimo necessista ser menor que o investimento máximo!')
        }
        else if( grauExp <= 1){
            setError('O grau de exponecialidade necessita ser maior que 1')
        }
         else{
            setError(null)
           
            
            const {str} = loadGraph(grauExp)
            setinitialConfig(str)
            setShowGraph(true)
           

        }

        
       

    }

    //button of add new members
    const addMembers = () =>{
        setLineGraph(lineGraph+1)
        const {newLine} = loadNewMembers(lineGraph, grauExp)
        setinitialConfig(newLine)
    }

    //butoo of finish the graph and show the infos
    const finishGraph = () =>{
        
        const {totalMembers} = getTotalMembers()

        const { prejudice } = loadPrejudice(min, max, totalMembers)

        setTotalM(totalMembers)
        setTotalPrejudice(prejudice)
        
        
        setShowInfos(true)
    }

    const restartGraph = () =>{
        setShowGraph(false)
        setShowInfos(false)
        setLineGraph(1)
        window.location.reload()
        
    }

  return <div className={styles.page_container}>

    

   {!showGraph && <div className={styles.form_container}>
    <h2> Insira os dados de configuração do grafo:</h2>
    <form onSubmit={handleConfig}>
        <label>
            <p>Grau Exponencial de Conexão:</p>
            <input onChange={(e) =>{setGrauExp(e.target.value)}} min={2} type="number" />
        </label>

        <label>
            <p>Valor Mínimo de Investimento por membro:</p>
            <select required min={1} onChange={(e) =>{setMin(e.target.value)}} name="min" id="min">
                <option value="100">R$100</option>
                <option value="1000">R$1.000</option>
                <option value="10000">R$10.000</option>
                <option value="100000">R$100.000</option>
            </select>
        </label>

        <label>
            <p>Valor Maximo de Investimento por membro:</p>
            <select required  min={1000} onChange={(e) =>{setMax(e.target.value)}} name="max" id="max">
                <option value="1000">R$1.000</option>
                <option value="10000">R$10.000</option>
                <option value="100000">R$100.000</option>
                <option value="200000">R$300.000</option>
            </select>
        </label>

        {error && <p className='error'>{error}</p>}
        <button type="submit">Gerar Grafo</button>
    </form>
    </div>}


    {showGraph && <div className={styles.graph_container}> 
    <h2>Grafo de Pirâmide Financeira com exponecialidade de {grauExp}º ordem</h2>
        <Graphviz dot={initialConfig} options={{
    useWorker: false,
    zoom: true,
  }}  />

    {!showInfos && <div className={styles.graph_btns}> 
    <button onClick={() => addMembers()}> Adicionar Membros </button>
    <button onClick={() => finishGraph()}> Encerrar Pirâmide </button> 
    </div>}

    </div>}


    {showInfos && <div className={styles.info_container}>

    <h1>Graph Information</h1>
    <div className={styles.card_infoDiv}>
        <h2>Numero de membros afiliados:</h2>
        <p>O número de membros afiliados ao esquema financeiro foi de <span>{totalM} pessoas.</span></p>
    </div>

    <div className={styles.card_infoDiv}>
        <h2>Prejuízo:</h2>
        <p>Com um valor médio de investimento entre R${min} - R${max}, a pirâmide financeira causou um prejuízo de:<span> R$ {totalPrejudice}.</span></p>
    </div>


    <button onClick={() =>{restartGraph()}}>Reiniciar Grafo</button>

    </div>}
    
  </div>
}

export default Config