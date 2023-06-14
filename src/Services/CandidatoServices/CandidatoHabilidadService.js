import api from "../../api/config";
import axios from "axios";

export const getCandidatoHabilidad = async ()=> { 
    let data = await api.get('candidatohabilidad').then(result => result.data);
    return data;
};

export const createCandidatoHabilidad = async (candidatohabilidad) => { 
    let data = await api.post('candidatohabilidad', candidatohabilidad).then(result => result.data);
    return data;
};

export const deleteCandidatoHabilidad = async (id_candidato, id_habilidad) => { 
    let data = await axios.delete(`https://localhost:7210/api/CandidatoHabilidad?id_candidato=${id_candidato}&id_habilidad=${id_habilidad}`);
    return data;
};
