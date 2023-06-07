import React, {useEffect, useState} from 'react'
import { getCandidatoById } from '../../../Services/CandidatoServices/CandidatoService';
import { useParams } from 'react-router';

const Editar = () => {
  const candidatoParams = useParams();

  const [Candidato,setcandidato]= useState(null)
 
   useEffect(()=>{
     getCandidatoById(candidatoParams.id, setcandidato)
   },[])
  
  return (
    <>
    {Candidato!=null? (
      <>
      <div><h2>Informacion del candidato </h2></div>
      <div className='infoc'>
        <span>Nombre completo: {Candidato.nombre} {Candidato.apellido1} {Candidato.apellido2}</span>
        <br /><span>Direccion: {Candidato.direccion}</span>
        <br /><span>Descripcion: {Candidato.descripcion}</span>
        {Candidato.candidatoOfertas.map((offers)=>
        {offers.ofertaId}
        )}
      </div>
      </>
    ):('Cargando')}
    
    </>

  )
}

export default Editar