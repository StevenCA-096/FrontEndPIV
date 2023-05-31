import React from 'react'
import { useRef } from "react";
import { QueryClient, useMutation } from "react-query";
import { create } from '../../../Services/CandidatoService';


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
    descripcion.current.value = "";
  }

  return (
    <>
    <div >Agregar nuevo candidato</div>
    <div >
      <label htmlFor="nombre">Nombre: </label>
      <input ref={nombre} type="text" id="nombre"/>

      <label htmlFor="ap1">Primer apellido: </label>
      <input ref={apellido1} type="text" id="ap1"/>

      <label htmlFor="ap2">Segundo apellido: </label>
      <input ref={apellido2} type="text" id="ap2"/>

      <label htmlFor="fechan">Fecha de nacimiento: </label>
      <input ref={fechaNacimiento} type="text" id="fechan"/>

      <label htmlFor="direccion">Direccion: </label>
      <input ref={direccion} type="text" id="direccion"/>

      <label htmlFor="telefono">Telefono: </label>
      <input ref={telefono} type="text" id="telefono"/>

      <label htmlFor="descripcion">descripcion: </label>
      <input ref={descripcion} type="text" id="descripcion"/>

      <button onClick={save}>Agregar</button>
    </div>
    </>
  )
}

export default AgregarCandidato