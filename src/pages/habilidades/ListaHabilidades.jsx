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
  //const { data2} = useQuery('candidadohabilidad',getCandidatoHabilidad);
  const [botonesEncendidos, setBotonesEncendidos] = useState([]);
  const [canHab,setCanHab] = useState();

  

  

  const { candidatoId } = useContext(CandidatoContext);
  const { candidatoId2 } = useContext(CandidatoContext);
  const [habilidadesCandidato, sethabilidadesCandidato] = useState([]);

  useState(()=>
  getCandidatoHabilidad(setCanHab)
)

  useEffect(() => {
    
    if (canHab!=null) {
      
      const candidatohabilidades_Filtradas = canHab.filter(
        (candidatohabilidad) => candidatohabilidad.candidatoId === candidatoId
      );
      sethabilidadesCandidato(candidatohabilidades_Filtradas);
    }
    
  }, [canHab, candidatoId]);
  console.log(canHab)
  //console.log('CandidatoId del context :', candidatoId);
  console.log('habilidadesFiltradas: ', habilidadesCandidato,candidatoId);


  const CambiarEstadoBoton = (habilidadId) => {
    if (habilidadesCandidato.includes(habilidadId)) {
      setBotonesEncendidos(botonesEncendidos.filter((id) => id === habilidadId));
    } else {
      setBotonesEncendidos([...botonesEncendidos, habilidadId]);
    }
  }
  
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

    className == `btn-skill active`? //Tiene que estar al reves porque el classname del parametro ya fue alternado
  
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
                                {habilidad.id}
                                </button>
                                </>
                            )}
            </div>
        </>
  )
}

export default ListaHabilidades