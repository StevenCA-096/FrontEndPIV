import api from "../../api/config";

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
    let data = await api.delete('candidatohabilidad', CandidatoId, HabilidadId).then(result => result.data);
    return data;
};