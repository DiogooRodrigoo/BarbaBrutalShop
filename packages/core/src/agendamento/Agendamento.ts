import { Servico } from "../servico";
import { Profissional } from "../profissional";

export default interface Agendamento {
  id: number;
  emailCliente: string;
  data: Date;
  profissional: Profissional;
  servicos: Servico[];
}
