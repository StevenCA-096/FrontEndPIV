import api from "../../api/config";

export const getCandidatoOferta = async () => { 
    let data = await api.get('candidatooferta').then(result => result.data);
    console.log(data)
    return data;
};

export const createCandidatoOferta = async (candidatooferta) => { 
    let data = await api.post('CandidatoOferta',candidatooferta).then(result => result.data);
    return data;
};