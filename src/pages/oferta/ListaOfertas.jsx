import React from 'react'
import { getOfertas } from '../../Services/OfertaService';
import { useQuery } from 'react-query';
import AgregarOferta from './components/AgregarOferta';
import Aplicar from './components/Aplicar';
const ListaOfertas = () => {
    const { data, isLoading, isError } = useQuery('oferta', getOfertas);
    if(isLoading)
    return <div>Loading...</div>
    
    if(isError)
    return <div>Error</div>

  return (
    <>   
    <AgregarOferta/><br />
    <h1>Lista Ofertas</h1>
    <div >
    {
            data.map((oferta) =>
            <div key={oferta.id} className='offer-container'>
                <span>{oferta.descripcion}</span> <br />
                <span>Habilidades</span>
                {                 
                oferta.habilidades.map((habs) =>
                <div>           
                <ul>
                  <li>{habs.nombre}</li>
                </ul>
                </div>
                )
                }
                <Aplicar param={oferta.id}></Aplicar>
                
            </div>
            )
        }
    </div>
    </>
  )
}

export default ListaOfertas