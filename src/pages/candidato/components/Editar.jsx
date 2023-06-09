import React, {useEffect, useState} from 'react'
import { getCandidatoById } from '../../../Services/CandidatoServices/CandidatoService';
import { useParams } from 'react-router';

import ListaFormaciones from '../../formacion/ListaFormaciones';
import OfertasCandidato from './ofertasCandidato';

import { NavLink } from 'react-router-dom';

const Editar = () => {
  const candidatoParams = useParams();

  const [Candidato,setcandidato]= useState(null)
  
   useEffect(()=>{
     getCandidatoById(candidatoParams.id, setcandidato)

   },[])
  
  
  return (
    <>
    <div className='contentc'>
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
        <div>
          
        </div>
      </div>
      </>
    ):('Cargando')}

            <div className='listformaciones'>
                <ListaFormaciones/><br />  
            </div>
            
            <div className='listocanOfertas'>
              {Candidato!=null?
              (<OfertasCandidato candidato={Candidato}/>):("Loading")
              }            
            </div>
    </div>
    </>  

  )
}

export default Editar