import api from "../api/config";

export const getOfertas = async () => { 
    let data = await api.get('oferta').then(result => result.data);
    return data;
};

export const create = async (oferta) => { 
    let data = await api.post('oferta',oferta).then(result => result.data);
    return data;
};