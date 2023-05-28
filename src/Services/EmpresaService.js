import api from "../api/config";

export const getEmpresa = async () => { 
    let data = await api.get('empresa').then(result => result.data);
    return data;
};


export const create = async (company) => { 
    let data = await api.post('Empresa',company).then(result => result.data);
    return data;
};