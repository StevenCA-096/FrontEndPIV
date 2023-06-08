import React, { useState } from "react";
import Modal from "react-modal";
import { QueryClient, useMutation } from "react-query";
import { createCandidatoOferta } from "../../../Services/CandidatoServices/CandidatoOfertaService";

const Aplicar = ({ param }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const openModal = () => {
    setIsOpen(true);
    console.log(param)
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input value:", inputValue);
    closeModal();
    save(inputValue);
  };

  const queryClient = new QueryClient();
    
  const mutation = useMutation("CandidatoOferta",createCandidatoOferta,
  {
      onSettled:()=>queryClient.invalidateQueries("CandidatoOferta"),
      mutationKey: "C   andidatoOferta"
  })

  const save = (idCandidato) =>{
    let candidatoOferta = {
        candidatoId: parseInt(idCandidato),
        ofertaId: parseInt(param),
    };
    mutation.mutateAsync(candidatoOferta)
    console.log(candidatoOferta)
  }

  return (
    <div>
      <button onClick={openModal}>Abrir cuadro de diálogo</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Cuadro de diálogo"
      >
        <h2>Cuadro de diálogo</h2>
        <p>Parámetro recibido: {param}</p>
        <form onSubmit={handleSubmit}>
          <label>
            Entrada:
            <input type="text" onChange={handleInputChange} placeholder="Id del candidato"/>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </Modal>
    </div>
  );
};

export default Aplicar;
