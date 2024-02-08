import { useState } from "react";

export const useGraphGenerator = () =>{

    let str;
    let newLine;
    let currentMember = [];

    const [graphCounter, setGraphCounter] = useState(0)
    const [graphArr, setGraphArr] = useState([])
    const [totalMembers, setTotalMembers] = useState(1)
    const [lastGraph, setLastGraph] = useState([])

    const loadGraph =  (grau) =>{
        

        currentMember.push(0)
        const StrArr = []

        currentMember.map((member) =>{
            
            for (let index = 0, counter = 1; index < grau; index++ & counter++) {
                StrArr.push(`Membro${member} -> Membro${counter}`)
                currentMember.push(counter)
                
            }

        })

        

        str = `digraph {
            ${StrArr.join(';')}
         }` 
        
        
         setLastGraph(StrArr.join(';'))
         setTotalMembers(grau)
         return {str}
    }

    const loadNewMembers = (line, grauExp) =>{

        
        let lastMember = (grauExp**line)


        //SECOND LINE CURRENT MEMBERS
        let currentMember = []
        for (let index = 0; index < grauExp; index++) {
            currentMember.push(index+1)   
        }



        //ANOTHER LINES CURRENT MEMBERS
        const currentMembers = []

        //ARR WITH THE GRAPHS STR 
        const StrArr = []
        setGraphCounter(lastMember)
        
        
        //SECOND LINE
        if(graphCounter == 0){

            //for each member in the first line adding members
            let counter = grauExp;

           currentMember.map((member) =>{
            for (let index = 0; index < grauExp; index++) {
                counter++
                StrArr.push(`Membro${member} -> Membro${counter}`)

                 // Adding the current values for the SECOND LINE
                currentMembers.push(counter)  
              
            }})

            //set total of members
            setTotalMembers(currentMembers[`${currentMembers.length-1}`])

            //current values second line
            setGraphArr(currentMembers)

            //new line to be added
            newLine = `digraph {
                ${lastGraph};
                ${StrArr.join(';')}
            }` 

            //set the last lines of graph
            setLastGraph(`${lastGraph};
            ${StrArr.join(';')}`)
            
            

            return {newLine}

        
        }
        //ANOTHER LINES
        else{

            //getting the last value from last line
            let counter =( graphArr[`${graphArr.length-1}`] + 1)
        
            graphArr.map((member) =>{
                for (let index = 0; index < grauExp; index++ & counter++) {
                    StrArr.push(`Membro${member} -> Membro${counter}`)
                    currentMembers.push(counter)
                    
                }
            })
            
            //set total of members
            setTotalMembers(currentMembers[`${currentMembers.length-1}`])

            //setting the current line as current Members 
            setGraphArr(currentMembers)
                
            //new line to be added
            newLine = `digraph {
                ${lastGraph};
                ${StrArr.join(';')}
            }` 
            
            //set last graph
            setLastGraph(`${lastGraph};
            ${StrArr.join(';')}`)



            return {newLine}
        }
       
      
        
    }

    const getTotalMembers = () =>{
        return {totalMembers}
    }
    
    
    return {loadGraph, loadNewMembers, getTotalMembers}
}