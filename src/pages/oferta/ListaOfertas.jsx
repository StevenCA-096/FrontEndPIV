import React from 'react'
import { getOfertas } from '../../Services/OfertaService';
import { useQuery } from 'react-query';
import AgregarOferta from './components/AgregarOferta';

const ListaOfertas = () => {
    const { data, isLoading, isError } = useQuery('oferta', getOfertas);
    if(isLoading)
    return <div>Loading...</div>
    
    if(isError)
    return <div>Error</div>

  return (
    <>   
    <AgregarOferta/><br />
    <h1>ListaOfertas</h1>
    <div>
    {
            data.map((oferta) =>
            <div key={oferta.id}>
                {oferta.descripcion}
                <hr />
            </div>
            )
        }
    </div>
    </>
  )
}

export default ListaOfertas