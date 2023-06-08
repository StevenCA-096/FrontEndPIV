import React, { useState } from 'react'
import { getCandidatoById } from '../../../Services/CandidatoServices/CandidatoService'
import { useQuery } from 'react-query'
const ofertasCandidato = (idParam) => {
    // let id = idParam
    // const { data, isLoading, isError } = useQuery('oferta', getCandidatoById(id));
    // const [formaciones,setFormaciones] = useState();

    
  return (
    <div>Ofertas a las que aplica el candidato</div>
  )
}

export default ofertasCandidato