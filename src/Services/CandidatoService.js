import api from "../api/config";

export const getCandidato = async () => { 
    let data = await api.get('candidato').then(result => result.data);
    return data;
};

export const create = async (empresa) => { 
    let data = await api.post('candidato',empresa).then(result => result.data);
    return data;
};