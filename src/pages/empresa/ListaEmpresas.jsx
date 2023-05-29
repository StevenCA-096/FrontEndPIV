import React from 'react'
import { useQuery } from "react-query";
import { getEmpresa } from "../../services/EmpresaService";

const ListaEmpresas = () => {

    const { data, isLoading, isError } = useQuery('empresa', getEmpresa);

  if(isLoading)
    return <div>Loading...</div>
    

  if(isError)
  return <div>Error</div>
     
  return (
    <>
    <div>
      <h1>Lista</h1>
        {
            data.map((empresa) =>
            <div key={empresa.id}>
                {empresa.nombre}
            </div>
            )
        }
    </div>
    </>

  )
}

export default ListaEmpresas