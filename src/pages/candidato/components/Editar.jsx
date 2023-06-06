import React from 'react'
import { getCandidatoById } from '../../../Services/CandidatoServices/CandidatoService';


const Editar = () => {
  const { data, isLoading, isError } = useQuery('candidato', getCandidatoById);
  if(isLoading)
    return <div>Loading...</div>
    
    if(isError)
    return <div>Error</div>
  return (
    <div><h2>Informacion del candidato</h2></div>

  )
}

export default Editar