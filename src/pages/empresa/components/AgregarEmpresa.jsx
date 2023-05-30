import React from 'react'
import { useRef } from "react";
import { QueryClient, useMutation } from "react-query";
import { create } from '../../../Services/EmpresaService';

const AgregarEmpresa = () => {
    const nombre = useRef(null);
    const direccion = useRef(null);
    const telefono = useRef(null);
    
    const queryClient = new QueryClient();
    
    const mutation = useMutation("empresa",create,
    {
        onSettled:()=>queryClient.invalidateQueries("empresas"),
        mutationKey: "empresa"
    })

    const save = ()=>{
        let newEmpresa = {
            id:0,
            nombre:nombre.current.value,
            direccion:direccion.current.value,
            telefono:parseInt(telefono.current.value),
        };
        mutation.mutateAsync(newEmpresa);
        
    }

  return (
    <>  
        <div>
            <label>Nombre: </label>
            <input ref={nombre} type="text" name="empresaNombre" />
            <label>Direccion: </label>
            <input ref={direccion} type="text" name="empresaDireccion" />
            <label>Telefono: </label>
            <input ref={telefono} type="text" name="empresaTelefono" />
            <button onClick={save}>Agregar</button>
        </div>
   
    </>
  )
}

export default AgregarEmpresa