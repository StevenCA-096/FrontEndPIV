import React from 'react'
import { useQuery } from "react-query";
import { getEmpresa } from '../../Services/EmpresaService';
import AgregarEmpresa from './components/AgregarEmpresa';
const ListaEmpresas = () => {

    const { data, isLoading, isError } = useQuery('empresa', getEmpresa);

  if(isLoading)
    return <div>Loading...</div>
    

  if(isError)
  return <div>Error</div>
     
  return (
    <>
    <AgregarEmpresa/><br />
    <div>
      <h2>Lista de empresas</h2><br />
        {
            data.map((empresa) =>
            <div key={empresa.id}>
                {empresa.id}
                {empresa.nombre}
                <hr />
            </div>
            )
        }
    </div>
    </>

  )
}

export default ListaEmpresas