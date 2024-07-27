"use client";
import DataInput from "@/components/agendamento/DataInput";
import ProfissionalInput from "@/components/agendamento/ProfissionalInput";
import ServicosInput from "@/components/agendamento/ServicoInput";
import Sumario from "@/components/agendamento/Sumario";
import Passos from "@/components/shared/Passos";
import Cabecalho from "@/data/hooks/Cabecalho";
import useAgendamento from "@/data/hooks/useAgendamento";
import { Profissional, Servico } from "@barba/core";
import { useState } from "react";

export default function PaginaAgendamento() {
  const [permiteProximoPasso, setPermiteProximoPasso] =
    useState<boolean>(false);

  const {
    profissional,
    servicos,
    data,
    selecionarProfissional,
    selecionarServicos,
    selecionarData,
    quantidadeDeSlots,
  } = useAgendamento();

  function profisisonalMudou(profissional: Profissional) {
    selecionarProfissional(profissional);
    setPermiteProximoPasso(!!profissional);
  }

  function servicosMudou(servicos: Servico[]) {
    selecionarServicos(servicos);
    setPermiteProximoPasso(servicos.length > 0);
  }

  function dataMudou(data: Date) {
    selecionarData(data);

    const temData = data;
    const horaValida = data.getHours() >= 8 && data.getHours() <= 21;

    setPermiteProximoPasso(temData && horaValida);
  }

  return (
    <div className="flex flex-col bg-zinc-900">
      <Cabecalho
        titulo="Agendamento de Serviços"
        descricao="Seja atendido exatamente no horário marcado."
      />
      <div className=" container flex flex-col lg:flex-row items-center lg:items-start lg:justify-around gap-10 lg:gap-0 py-10">
        <Passos
          permiteProximoPasso={permiteProximoPasso}
          permiteProximoPassoMudou={setPermiteProximoPasso}
          labels={[
            "Selecione o profissional",
            "Informe os serviços",
            "Escolha o horário",
          ]}
        >
          <ProfissionalInput
            profissional={profissional}
            profissionalMudou={profisisonalMudou}
          />
          <ServicosInput servicos={servicos} servicosMudou={servicosMudou} />
          <DataInput
            data={data}
            dataMudou={dataMudou}
            quantidadeDeSlots={quantidadeDeSlots()}
          />
        </Passos>
        <Sumario />
      </div>
    </div>
  );
}
