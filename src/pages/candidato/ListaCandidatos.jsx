import React from 'react'
import { getCandidato } from '../../Services/CandidatoServices/CandidatoService'
import { useQuery,useMutation,QueryClient } from 'react-query'
import AgregarCandidato from './components/AgregarCandidato'
import { NavLink } from 'react-router-dom'
import { deleteCandidato } from '../../Services/CandidatoServices/CandidatoService'

const ListaCandidatos = () => {
    const queryClient = new QueryClient();
    const { data, isLoading, isError } = useQuery('candidato', getCandidato);
    if(isLoading)
    return <div>Loading...</div>
    

    if(isError)
    return <div>Error</div>

    

    function handleClick(id) {
        
        const idCandidato = id;
        deleteCandidato(id);
        console.log("Id del candidato: ", idCandidato);
      }
      
  return (
    <>
        <div>
         <AgregarCandidato/><br />
        </div>   
    <div>ListaCandidatos</div><br />
    <div>
        <table>
            <thead >
                <tr>
                <th>Id</th>
                <th>nombre</th>
                <th>Telefono</th>
                <th>Acciones</th>
                </tr>
                
            {
            data.map((candidato)=>
                <>
                <tr key={candidato.id}>{candidato.id}
                <td>{candidato.nombre}</td>
                <td>{candidato.telefono}</td>
                <td>
                    <NavLink className='tablebtn' to="components">Examinar</NavLink>
                    <button className='tablebtn'>Habilidades</button>
                    <button className='tablebtn' onClick={() => handleClick(candidato.id)}>Eliminar</button>
                </td>
                </tr>
                
                </>        
            )}
            </thead>
        </table>
        
    </div>
    </>
  )
}

export default ListaCandidatos