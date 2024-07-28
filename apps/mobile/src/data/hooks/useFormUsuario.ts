import { useState } from "react";
import useUsuario from "./useUsuario";

export default function useFormUsuario() {
  const { entrar } = useUsuario();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [erros, setErros] = useState({ nome: "", email: "", telefone: "" });

  function validate() {
    let erros: any = {};

    if (!nome) {
      erros.nome = "Nome é obrigatório";
    }
    if (!email) {
      erros.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      erros.email = "E-mail inválido";
    }

    if (!telefone) {
      erros.telefone = "Telefone é obrigatório";
    } else if (!/^\d{10,11}$/.test(telefone)) {
      erros.telefone = "Telefone deve ter 10 ou 11 dígitos";
    }

    setErros(erros);
    return Object.keys(erros).length === 0;
  }

  async function cadastrar() {
    if (validate()) {
      await entrar({ nome, email, telefone });
    }
  }

  return {
    nome,
    setNome,
    email,
    setEmail,
    telefone,
    setTelefone,
    erros,
    cadastrar,
  };
}
