
import { useQuery, useMutation, QueryClient } from 'react-query'

import { getFormacion } from '../../Services/FormacionService'
import { deleteFormacion } from '../../Services/FormacionService'
import AgregarFormacion from './components/AgregarFormacion'

import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';

const ListaFormaciones = () => {

    const candidatoParams = useParams();

    const [Candidato,setcandidato]= useState(null)
    const [formacionesCandidato, setFormacionesCandidato] = useState([]);
  
    const queryClient = new QueryClient();
    const { data, isLoading, isError } = useQuery('formacion', getFormacion);

    useEffect(() => {
        if (data) {
          const formacionesFiltradas = data.filter(

            (formacion) => formacion.candidatoId === parseInt(candidatoParams.id)

          );
          console.log('getFormacion:', data);
          console.log('candidatoParams.id:', candidatoParams.id);
          console.log('formacionesFiltradas:', formacionesFiltradas);
          setFormacionesCandidato(formacionesFiltradas);
        }
      }, [data, candidatoParams.id]);

    if (isLoading)
        return <div>Loading...</div>

    if (isError)
        return <div>Error</div>

        if (formacionesCandidato.length === 0) {
            return <div>El candidato no tiene formaciones</div>;
          }


          console.log('formacionesCandidato:', formacionesCandidato);

    return (
        <>
            <div>
                <AgregarFormacion /><br />
                
            </div>
            <div>Lista de formaciones</div><br />
            <div>
                <table>
                    <thead >
                        <tr>
                            <th>Nombre</th>
                            <th>Años de estudio</th>
                            <th>Culminacion</th>
                            <th>Acciones</th>
                        </tr>

                        {
                            formacionesCandidato.map((formacion) =>
                                <>

                                    <tr key={formacion.id}>{formacion.nombre}
                                        <td>{formacion.años_Estudio}</td>
                                        <td>{formacion.fecha_Culminacion}</td>
                                        <td>
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

export default ListaFormaciones