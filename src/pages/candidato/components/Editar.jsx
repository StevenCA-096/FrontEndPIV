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
      <div className='infoc'>
        <div>
       <h2>Informacion del candidato </h2>
        <span>Nombre completo: {Candidato.nombre} {Candidato.apellido1} {Candidato.apellido2}</span>
        <br /><span>Direccion: {Candidato.direccion}</span>
        <br /><span>Descripcion: {Candidato.descripcion}</span>
        <br /><span>Telefono: {Candidato.telefono}</span>
        </div>
        {
          Candidato.formaciones!=null?(
            Candidato.formaciones.map((formacion)=>
            <div>
              <h2>Formaciones</h2>
              <span>Titulo: {formacion.nombre}</span>
              <br /><span>Años de estudio: {formacion.años_Estudio}</span>
              <br /><span>Culminacion: {formacion.nombre}</span>
            </div>
          )
          ):
          (
            <span>No agrego formaciones</span>
          )
          
        }
        
        {
          Candidato.candidatoOfertas!= null? (
            Candidato.candidatoOfertas.map((ofertas)=>
          <div>
            <h2>Ofertas</h2>
            <span>{ofertas.candidatoId}</span>
          </div>
          )
          ):(
            <span>Este candidato no esta aplicando a ninguna oferta</span>
          )
          
        }
        {
          Candidato.candidatoHabilidades!= null?(
            Candidato.candidatoHabilidades.map((habilidades)=>
            <div>
              <h2>Habilidades</h2>
            <span>{habilidades.habilidadId}</span>
            </div>
            )
          ):(
            <span>Este candidato no agrego habilidades</span>
          )
        }
      </div>
      </>
    ):('Cargando')}
    
    </>

  )
}

export default Editar