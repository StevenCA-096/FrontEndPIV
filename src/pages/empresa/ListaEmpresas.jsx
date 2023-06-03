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
      <table>
        <thead>
          <th>Id empresa</th>
          <th>Nombre empresa</th>
          <th>Direccion empresa</th>
          {
            data.map((empresa)=>
                <>
                <tr key={empresa.id}>{empresa.id}
                <td>{empresa.nombre}</td>
                <td>{empresa.direccion}</td>
                </tr>
                
                </>
            )}
        </thead>
      </table>
       
    </div>
    </>

  )
}

export default ListaEmpresas