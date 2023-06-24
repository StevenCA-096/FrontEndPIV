import React from 'react'
import { useRef } from "react";
import { QueryClient, useMutation } from "react-query";
import { create } from '../../../Services/OfertaService';

const AgregarOferta = () => {
    const descripcion = useRef(null);
    const idOferta = useRef(null);

    const queryClient = new QueryClient();
    
    const mutation = useMutation("oferta",create,
    {
        onSettled:()=>queryClient.invalidateQueries("ofertas"),
        mutationKey: "oferta"
    })

    const save = ()=>{
        let nuevaOferta = {
            
            descripcion:descripcion.current.value,
            empresaId: idOferta.current.value
        };
        mutation.mutateAsync(nuevaOferta);
        limpiarInput();
        
    }
    const limpiarInput = ()=>{
      descripcion.current.value = "";
      idOferta.current.value = "";
    }
  return (
    <>
    <div>AgregarOferta</div>
    <div className='container'> 
            <label>Id empresa: </label>
            <input className='input' ref={idOferta} type="text" name="empresaNombre" />
            <label>Descripcion oferta: </label>
            <input className='input' ref={descripcion} type="text" name="empresaNombre" />
            <button className='AgregarEmpbtn' onClick={save}>Agregar</button>
    </div>
    </>
  )
}

export default AgregarOferta