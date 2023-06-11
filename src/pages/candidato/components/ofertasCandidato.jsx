import React, { useState } from 'react'
import { getCandidatoById } from '../../../Services/CandidatoServices/CandidatoService'
import { useQuery } from 'react-query'
const ofertasCandidato = (Candidato) => {
    let can = Candidato
    console.log(can)
  return (
    <>
    <div>
       <h2>Ofertas a las que aplica el candidato</h2> 
       
    </div>
    </>
  )
}

export default ofertasCandidato