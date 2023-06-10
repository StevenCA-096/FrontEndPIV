import React from 'react';
import { useQuery } from 'react-query';
import { getEmpresa } from '../../Services/EmpresaService';
import AgregarEmpresa from './components/AgregarEmpresa';
import '../../index.css'; // Update the import statement with the correct relative path

// Rest of the code...


const ListaEmpresas = () => {
  const { data, isLoading, isError } = useQuery('empresa', getEmpresa);

  if (isLoading) return <div className="loading">Loading...</div>;

  if (isError) return <div className="error">Error</div>;

  return (
    <>
      <AgregarEmpresa />
      <div className="table-container">
        <h2>Lista de empresas</h2>
        <table>
          <thead>
            <tr>
              <th>Id empresa</th>
              <th>Nombre empresa</th>
              <th>Direccion empresa</th>
            </tr>
          </thead>
          <tbody>
            {data.map((empresa) => (
              <tr key={empresa.id}>
                <td>{empresa.id}</td>
                <td>{empresa.nombre}</td>
                <td>{empresa.direccion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListaEmpresas;