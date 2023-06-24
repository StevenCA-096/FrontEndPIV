import React from 'react'
import { useRef } from "react";
import { QueryClient, useMutation } from "react-query";
import { create } from '../../../Services/CandidatoServices/CandidatoService';


const AgregarCandidato = () => {
  const queryClient = new QueryClient();

  const nombre = useRef();
  const apellido1 = useRef();
  const apellido2 = useRef();
  const fechaNacimiento = useRef();
  const direccion = useRef();
  const telefono = useRef();
  const descripcion = useRef();

  const mutation = useMutation("candidato",create,
    {
        onSettled:()=>queryClient.invalidateQueries("candidatos"),
        mutationKey: "candidato"
    })

    const save = ()=>{
      let nuevoCandidato = {       
          nombre:nombre.current.value,
          apellido1:apellido1.current.value,
          apellido2:apellido2.current.value,
          fecha_Nacimiento: fechaNacimiento.current.value,
          direccion: direccion.current.value,
          telefono: parseInt(telefono.current.value),
          descripcion:descripcion.current.value
      };
      mutation.mutateAsync(nuevoCandidato);
      limpiarInput()
  }
  const limpiarInput = ()=>{
    nombre.current.value = "";
    apellido1.current.value = "";
    apellido2.current.value = "";
    fechaNacimiento.current.value = "";
    direccion.current.value = "";
    telefono.current.value = "";
    descripcion.current.value = "";
  }


  return (
    <>
    <h2>Agregar candidato</h2>
    <div id='input-container'>
      
      <input ref={nombre} type="text" id="nombre" placeholder='Nombre'/>
     
      <input placeholder='Primer apellido' ref={apellido1} type="text" id="ap1"/>

      <input placeholder='Segundo apellido' className='input' ref={apellido2} type="text" id="ap2"/>

      <input placeholder='Fecha de nacimiento' className='input' ref={fechaNacimiento} type="text" id="fechan"/>
         
      <input placeholder='direccion'className='input' ref={direccion} type="text" id="direccion"/>     

      <input placeholder='telefono'className='input' ref={telefono} type="text" id="telefono"/>

      <input placeholder='Email' className='input' ref={descripcion} type="text" id="descripcion"/>
      </div>
      <button onClick={save}>Agregar</button>
         
    </>
  )
}

export default AgregarCandidato