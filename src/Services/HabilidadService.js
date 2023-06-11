import api from "../api/config";

export const getHabilidades = async () =>{
    let data = await api.get('habilidad').then(result => result.data);
    console.log(data);
    return data;
}