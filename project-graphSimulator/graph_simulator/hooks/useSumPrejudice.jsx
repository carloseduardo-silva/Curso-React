
export const useSumPrejudice = () =>{

        const loadPrejudice = (min, max, members) =>{

            

            let averageInvestment = (Number.parseInt(min) + Number.parseInt(max))/2
            
            console.log(averageInvestment)

            let prejudice = averageInvestment * members

            

            return {prejudice}
        }
    


    return{ loadPrejudice }
}