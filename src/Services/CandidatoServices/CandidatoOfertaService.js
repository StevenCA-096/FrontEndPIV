import api from "../../api/config";
import axios from "axios";
export const getCandidatoOferta = async () => { 
    let data = await api.get('candidatooferta').then(result => result.data);
    console.log(data)
    return data;
};

export const createCandidatoOferta = async (candidatooferta) => { 
    let data = await api.post('CandidatoOferta',candidatooferta).then(result => result.data);
    return data;
};

export const getCandidatoOfertaMatch = async(id,state) => {
    let data = await axios.get(`https://localhost:7210/api/Consulta/Oferta/${id}`);
    //console.log(data.data)
    state(data.data)
    return data.data;
}
