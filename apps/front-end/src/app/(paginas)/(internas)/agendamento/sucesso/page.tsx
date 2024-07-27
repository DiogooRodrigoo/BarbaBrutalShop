import AgendamentoComSucesso from "@/components/agendamento/AgendamentoComSucesso";
import Cabecalho from "@/components/shared/Cabecalho";

export default function PaginaAgendamento() {
  return (
    <div className="flex flex-col bg-zinc-900">
      <Cabecalho
        titulo="Agendamento de Serviço"
        descricao="Seu horário está garantido e será um prazer te atender!"
      />
      <div className="container flex flex-col justify-around items-center py-10 gap-1">
        <AgendamentoComSucesso />
      </div>
    </div>
  );
}
