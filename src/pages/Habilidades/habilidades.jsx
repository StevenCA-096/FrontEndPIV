import React from 'react'
import { getHabilidades } from '../../Services/HabilidadService';
import { useParams } from 'react-router';

const habilidades = () => {
    let idCandidato = useParams();
    const { data, isLoading, isError } = useQuery('habilidades', getHabilidades);
  return (
    <div>habilidades</div>
  )
}

export default habilidades