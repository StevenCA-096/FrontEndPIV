import axios from "axios";
import api from "../api/config";

export const getFormacion = async () => { 
    let data = await api.get('formacion').then(result => result.data);
    return data;
};

export const create = async (formacion) => { 
    let data = await api.post('formacion',formacion).then(result => result.data);
    return data;
};

export const deleteFormacion = async (id) => { 
    let data = await api.delete('formacion',id).then(result => result.data);
    return data;
};

