import api from "../api/config";

export const getCandidato = async () => { 
    let data = await api.get('candidatooferta').then(result => result.data);
    return data;
};

export const create = async (empresa) => { 
    let data = await api.post('candidatooferta',empresa).then(result => result.data);
    return data;
};