import React, { useState,useEffect } from 'react'
import { getCandidatoById } from '../../../Services/CandidatoServices/CandidatoService'
import { useQuery } from 'react-query'

const ofertasCandidato = (candidato) => {
    let data = candidato.candidato;
    // let id = idParam
    // const { data, isLoading, isError } = useQuery('oferta', getCandidatoById(id));
    // const [formaciones,setFormaciones] = useState();

    console.log(data)
  return (
    <>
    <div><h3>Ofertas en las que participa:</h3></div>
    <ul>
    {
      data.ofertas.map((ofertasC)=>
      <li>{ofertasC.descripcion}</li>
      )
    }
    </ul>

    </>
  )
}

export default ofertasCandidato