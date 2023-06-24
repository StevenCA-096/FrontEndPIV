import axios from "axios";
import api from "../../api/config";

export const getCandidato = async () => { 
    let data = await api.get('candidato').then(result => result.data);
    return data;
};

export const create = async (empresa) => { 
    let data = await api.post('candidato',empresa).then(result => result.data);
    return data;
};

export const deleteCandidato = async (id) => { 
    let data = await axios.delete(`https://localhost:7210/api/Candidato/${id}`);
    return data;
};

// export const getCandidatoById = async (id) => { 
//     let data = await api.get('candidato',id).then(result => result.data);
//     return data;
// };

 export const getCandidatoById = async(id,state) => {
     let data = await axios.get(`https://localhost:7210/api/Candidato/${id}`);
     
     state(data.data)
     return data.data;
 }