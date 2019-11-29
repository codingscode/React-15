import React from 'react'

import Pessoa from '../Pessoa/Pessoa'

const pessoas = (props) => props.pessoas.map((pessoa, index) => {
    return (<Pessoa 
    click={() => props.clicked(index)}
    nome={pessoa.nome} 
    idade={pessoa.idade}
    key={pessoa.id}
    changed={(event) => props.changed(event, pessoa.id)}/>
    )
  })


export default pessoas;