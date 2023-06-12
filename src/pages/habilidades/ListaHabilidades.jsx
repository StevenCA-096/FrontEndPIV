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
  const { data, isLoading, isError } = useQuery('habilidades', getHabilidades);

  const [botonesEncendidos, setBotonesEncendidos] = useState([]);

  const CambiarEstadoBoton = (habilidadId) => {
    if (botonesEncendidos.includes(habilidadId)) {
      setBotonesEncendidos(botonesEncendidos.filter((id) => id === habilidadId));
    } else {
      setBotonesEncendidos([...botonesEncendidos, habilidadId]);
    }
  }

  const { candidatoId } = useContext(CandidatoContext);
  const { candidatoId2 } = useContext(CandidatoContext);

  const { data2} = useQuery('candidatohabilidad', getCandidatoHabilidad);
  const [habilidadesCandidato, sethabilidadesCandidato] = useState([]);

  useEffect(() => {
    if (data2) {
      const candidatohabilidades_Filtradas = data2.filter(
        (candidatohabilidad) => candidatohabilidad.candidatoId === candidatoId2
      );
      sethabilidadesCandidato(candidatohabilidades_Filtradas);
    }
  }, [data2, candidatoId2]);

  console.log('CandidatoId del context :', candidatoId);
  console.log('habilidadesFiltradas: ', habilidadesCandidato);

  
  const btnHabilidadesRef = useRef([]);

  const mutationCreate = useMutation("candidatohabilidad",createCandidatoHabilidad,
  {
      onSettled:()=>queryClient.invalidateQueries("candidatohabilidades"),
      mutationKey: "candidatohabilidad"
  })

  const Metodo = (habilidadId, className)=>{

    CambiarEstadoBoton(habilidadId)
    console.log("CandidatoId= ", candidatoId, "HabilidadId= ", habilidadId, "ClassName= ", className); //para la classname es comprobar si tira el contrario

    let CandidatoHabilidadCREATE = {       
      CandidatoId:candidatoId,
      HabilidadId:habilidadId
    };

    className === `btn-skill active`? //Tiene que estar al reves porque el classname del parametro ya fue alternado
  
    deleteCandidatoHabilidad(candidatoId, habilidadId)
    : mutationCreate.mutateAsync(CandidatoHabilidadCREATE)
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
                            data.map((habilidad, index) =>
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