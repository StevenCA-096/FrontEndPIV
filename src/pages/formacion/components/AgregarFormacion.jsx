import React, {useEffect, useState} from 'react'
import { useRef } from "react";
import { QueryClient, useMutation } from "react-query";
import { create } from '../../../Services/FormacionService';


import { useParams } from 'react-router';

const AgregarFormacion = () => {
    const queryClient = new QueryClient();

    const candidatoParams = useParams();
  
    const nombre = useRef();
    const Años_Estudio = useRef();
    const Fecha_Culminacion = useRef();
  
    const mutation = useMutation("formacion",create,
      {
          onSettled:()=>queryClient.invalidateQueries("formaciones"),
          mutationKey: "formacion"
      })
  
      const save = ()=>{
        let nuevaFormacion = {     
            candidatoId:candidatoParams.id, 
            nombre:nombre.current.value,
            años_Estudio: parseInt(Años_Estudio.current.value),
            fecha_Culminacion:Fecha_Culminacion.current.value
            
        };
        mutation.mutateAsync(nuevaFormacion);
        limpiarInput()
    }
    const limpiarInput = ()=>{
      nombre.current.value = "";
      Años_Estudio.current.value = "";
      Fecha_Culminacion.current.value = "";
    }
  
    return (
      <>
      <h2>Agregar formacion</h2>
      <div id='input-container'>
        
        <input ref={nombre} type="text" id="nombre" placeholder='Nombre'/>
       
        <input placeholder='Años de estudio' ref={Años_Estudio} type="int" id="anStu"/>
  
        <input placeholder='Fecha de culminacion' className='input' ref={Fecha_Culminacion} type="text" id="feCu"/>

        </div>
        <button onClick={save}>Agregar</button>
           
      </>
    )
  }
  
  export default AgregarFormacion