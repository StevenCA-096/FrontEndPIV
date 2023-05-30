import React from 'react'
import { getCandidato } from '../../Services/CandidatoService'
import { useQuery } from 'react-query'
import AgregarCandidato from './components/AgregarCandidato'

const ListaCandidatos = () => {
    const { data, isLoading, isError } = useQuery('candidato', getCandidato);
    if(isLoading)
    return <div>Loading...</div>
    
    if(isError)
    return <div>Error</div>
  return (
    <>
    <AgregarCandidato/><br />
    <div>ListaCandidatos</div><br />
    <div>
        {
            data.map((candidato)=>
                <div key={candidato.id}>
                    {candidato.nombre}
                </div>
            )
        }
    </div>
    </>
  )
}

export default ListaCandidatos