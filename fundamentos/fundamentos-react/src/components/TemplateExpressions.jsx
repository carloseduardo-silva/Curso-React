const TemplateExpressions = () =>{

    const name = 'Kadu';
    const data = {
        age:18,
        job: 'Developer FrontEnd'

    }


    return(

        <div>

            <h1> Olá {name}, tudo bem? Tenho {data.age} anos e trabalho atualmente como {data.job}</h1>

            {console.log('oi ne')}
        </div>

    )


}

export default TemplateExpressions