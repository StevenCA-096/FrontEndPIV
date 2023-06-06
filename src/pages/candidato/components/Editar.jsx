import React, {useState} from 'react'
import { getCandidatoById } from '../../../Services/CandidatoServices/CandidatoService';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

const Editar = () => {
  const id = useParams();
  const { data, isLoading, isError } = useQuery('candidato', getCandidatoById(id));
  
   if(isLoading)
     return <div>Loading...</div>

     if(isError)
     return <div>Error</div>
  console.log(data);
  return (
    <>
    <div><h2>Informacion del candidato </h2></div>
    </>

  )
}

export default Editar