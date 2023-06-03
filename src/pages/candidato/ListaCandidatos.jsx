import React from 'react'
import { getCandidato } from '../../Services/CandidatoService'
import { useQuery } from 'react-query'
import AgregarCandidato from './components/AgregarCandidato'

const ListaCandidatos = () => {
    const { data, isLoading, isError } = useQuery('candidato', getCandidato);
    if(isLoading)
    return <div>Loading...</div>
    
    if(isError)
    return <div>Error</div>

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
      
  return (
    <>
    y
        <div>
         <AgregarCandidato/><br />
        </div>
    
    <div>ListaCandidatos</div><br />
    <div>
        <table>
            <thead className='tablehead'>
                <th>Id</th>
                <th>nombre</th>
                <th>Telefono</th>
                <th>Acciones</th>
            {
            data.map((candidato)=>
                <>
                <tr key={candidato.id}>{candidato.id}
                <td>{candidato.nombre}</td>
                <td>{candidato.telefono}</td>
                <td>
                    <button className='tablebtn'>Habilidades</button>
                    <button className='tablebtn'>Examinar</button>
                    <button className='tablebtn'>Eliminar</button>
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