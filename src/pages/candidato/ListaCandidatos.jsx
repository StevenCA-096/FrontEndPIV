import React, { useState , createContext, useContext } from 'react'
import { getCandidato } from '../../Services/CandidatoServices/CandidatoService'
import { useQuery, useMutation, QueryClient} from 'react-query'
import AgregarCandidato from './components/AgregarCandidato'
import { NavLink } from 'react-router-dom'
import { deleteCandidato } from '../../Services/CandidatoServices/CandidatoService'
import Editar from './components/Editar'

import CandidatoContext from './components/CandidatoContext';

export const ListaCandidatos = () => {

    const { setCandidatoId } = useContext(CandidatoContext);
    
    const handleNavLinkClick = (candidatoId) => {
        setCandidatoId(candidatoId);
      };

    const queryClient = new QueryClient();
    const { data, isLoading, isError } = useQuery('candidato', getCandidato);

    if (isLoading)
        return <div>Loading...</div>

    if (isError)
        return <div>Error</div>

    const deleteCandidato = (id) => {
        const idCandidato = id.id;
        console.log("Id del candidato: ", idCandidato);
        deleteCandidato(idCandidato);
    }

    return (
        <>
            <div>
                <AgregarCandidato /><br />
                
            </div>
            <div>Lista Candidatos</div><br />
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
                            data.map((candidato) =>
                                <>
                                    <tr key={candidato.id}>
                                        <td>{candidato.id}</td>
                                        <td>{candidato.nombre}</td>
                                        <td>{candidato.telefono}</td>
                                        <td>

                                            <NavLink className='tablebtn' to={`components/${candidato.id}`}>Examinar</NavLink>
                                            
                                            <NavLink className='tablebtn' to={'/habilidades'} 
                                            onClick={() => handleNavLinkClick(candidato.id)}
                                            
                                            > Habilidades </NavLink>

                                            <button className='tablebtn' onClick={() => deleteCandidato(candidato.id)}>Eliminar</button>
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

export default ListaCandidatos;