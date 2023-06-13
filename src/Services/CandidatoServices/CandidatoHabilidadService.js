import api from "../../api/config";
import axios from "axios";

export const getCandidatoHabilidad = async () => { 
    let data = await api.get('candidatohabilidad').then(result => result.data);
    
    console.log(data)
    return data;
};

export const createCandidatoHabilidad = async (candidatohabilidad) => { 
    let data = await api.post('candidatohabilidad', candidatohabilidad).then(result => result.data);
    return data;
};

// export const deleteCandidatoHabilidad = async (CandidatoId,HabilidadId) => { 
//     let data = await axios.delete(`https://localhost:7210/api/candidatohabilidad/${CandidatoId,HabilidadId}`);
//     return data;
// };

export const deleteCandidatoHabilidad = async (CandidatoId, HabilidadId) => { 
    let data = await axios.delete(`https://localhost:7210/api/CandidatoHabilidad?id_candidato=${CandidatoId}&id_habilidad=${HabilidadId}`);
    console.log(data)
    return data;
};