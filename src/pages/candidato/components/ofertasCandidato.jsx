import React, { useState,useEffect } from 'react'
import { getCandidatoById } from '../../../Services/CandidatoServices/CandidatoService'
import { useQuery } from 'react-query'
import { getCandidatoOfertaMatch } from '../../../Services/CandidatoServices/CandidatoOfertaService'
import Aplicar from '../../oferta/components/Aplicar'
const ofertasCandidato = (candidato) => {
    let data = candidato.candidato;
    const [match, setmatch] = useState()
    
     useEffect(()=>{
       getCandidatoOfertaMatch(data.id, setmatch)
  
     },[])
     
  return (
    <>
    <div><h3>Ofertas en las que participa:</h3></div>
    <ul>
    {
      
      data.ofertas.map((ofertasC)=>
      <li key={ofertasC.ofertaId}>{ofertasC.descripcion}</li>
      
      )
      
    }
    {console.log(data)}
    
    </ul>
    <div>
      <div><h4>Ofertas recomendadas:</h4>
      <ul>
        {match!= null? (
          match.map((ofertaFiltro)=> 
          <>
        <li >{ofertaFiltro.descripcion}</li>
        <Aplicar param={ofertaFiltro.id}></Aplicar>
        </>
        )):("No encontramos ofertas acorde a sus habilidades")}
      </ul>
      </div>
    </div>
    </>
  )
}

export default ofertasCandidato