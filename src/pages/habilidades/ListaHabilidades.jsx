import React, { useState, useContext, useRef, useEffect } from 'react'
import { useQuery, useMutation, QueryClient } from 'react-query'
import { NavLink } from 'react-router-dom'
import { getHabilidades } from '../../Services/HabilidadService';
import { createCandidatoHabilidad } from '../../Services/CandidatoServices/CandidatoHabilidadService';
import { deleteCandidatoHabilidad } from '../../Services/CandidatoServices/CandidatoHabilidadService';
import { getCandidatoHabilidad } from '../../Services/CandidatoServices/CandidatoHabilidadService';
import CandidatoContext from '../candidato/components/CandidatoContext';

const ListaHabilidades = () => {

  const queryClient = new QueryClient();
  const { candidatoId } = useContext(CandidatoContext);
  const btnHabilidadesRef = useRef([]);

  const {data: habilidad, isLoading, isError } = useQuery('habilidades', getHabilidades);
  //console.log('Aqui deberia ir habilidades:', habilidad);

  const { data: candidatoHabilidad} = useQuery('candidatohabilidades', getCandidatoHabilidad);
  //console.log('Aqui deberia ir habilidadesCandidato:', candidatoHabilidad);

  const SetearBotones = [];

  if (candidatoHabilidad) {
      const candidatohabilidad_filtrado = candidatoHabilidad.filter(
        (candidatohabilidad) => candidatohabilidad.candidatoId === candidatoId
      );

      // console.log("El array de habilidades es ", habilidad)
      // console.log("El array de candidatohabilidades que el candidato tiene es ", candidatohabilidad_filtrado)

    habilidad.map((habilidad) => 
  
    candidatohabilidad_filtrado.map((candidatohabilidad) => 
  
    {if (habilidad.id === candidatohabilidad.habilidadId){

      SetearBotones.push(habilidad.id)

    }}))}

    //console.log("Array de habilidadesId para setear botones es ", SetearBotones)


  const [botonesEncendidos, setBotonesEncendidos] = useState(SetearBotones);
    
  const CambiarEstadoBoton = (habilidadId) => {
    if (botonesEncendidos.includes(habilidadId)) {
      setBotonesEncendidos(botonesEncendidos.filter((id) => id !== habilidadId));
    } else {
      setBotonesEncendidos([...botonesEncendidos, habilidadId]);
    }
  }

  const mutationCreate = useMutation("candidatohabilidad",createCandidatoHabilidad,
  {
      onSettled:()=>queryClient.invalidateQueries("candidatohabilidades"),
      mutationKey: "candidatohabilidad"
  })

  const Metodo = (habilidadId, ClassName)=>{

    CambiarEstadoBoton(habilidadId)

    let CandidatoHabilidadCREATE = {       
      CandidatoId:candidatoId,
      HabilidadId:habilidadId
    };

    if (ClassName === `btn-skill active`){ //Si el parametro Classname era active, el classname del boton se volvio inactive
                      
      deleteCandidatoHabilidad(candidatoId, habilidadId)

    } else {

      mutationCreate.mutateAsync(CandidatoHabilidadCREATE)

    }
}

  if (isLoading)
      return <div>Loading...</div>

  if (isError)
      return <div>Error</div>

  return (

    
<>
            <div>Banco de habilidades</div><br />
            <div>

                        {
                            habilidad.map((habilidad, index) =>
                                <>
                                <button 

                                key={habilidad.id} 
                                ref={(element) => (btnHabilidadesRef.current[index] = element)}

                                className={`btn-skill ${botonesEncendidos.includes(habilidad.id) ? 'active' : 'inactive'}`}
                    
                                onClick={() => {Metodo(habilidad.id, btnHabilidadesRef.current[index].className)}}
                              
                                >{habilidad.nombre}
   
                                </button>                           

                                </>
                            )}
            </div>
        </>
  )
}

export default ListaHabilidades