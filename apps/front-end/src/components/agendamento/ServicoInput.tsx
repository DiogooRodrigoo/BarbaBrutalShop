import useServicos from "@/data/hooks/useServicos";
import { Servico } from "@barba/core";
import Image from "next/image";

export interface ServicoInputProps {
  servicos: Servico[];
  servicosMudou: (servicos: Servico[]) => void;
}

export default function ServicosInput(props: ServicoInputProps) {
  const { servicosMudou } = props;
  const { servicos: todosServicos } = useServicos();

  function alterarMarcacaoServico(servico: Servico) {
    const servicoSelecionado = props.servicos.find((s) => s.id === servico.id);
    servicosMudou(
      servicoSelecionado
        ? props.servicos.filter((s) => s.id !== servico.id)
        : [...props.servicos, servico]
    );
  }
  return (
    <div className="flex flex-col gap-5">
      <span className="text-sm uppercase text-zinc-400">Serviços</span>
      <div className="grid grid-cols-3 self-start gap-5">
        {todosServicos.map((servico) => (
          <Opcao
            key={servico.id}
            servico={servico}
            onClick={alterarMarcacaoServico}
            selecionado={props.servicos.some((serv) => serv.id === servico.id)}
          />
        ))}
      </div>
    </div>
  );
}

function Opcao(props: {
  servico: Servico;
  onClick: (s: Servico) => void;
  selecionado?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center cursor-pointer select-none border rounded-lg
                    overflow-hidden ${props.selecionado ? "border-green-400" : "border-zinc-700"}`}
      onClick={() => props.onClick(props.servico)}
    >
      <Image
        src={props.servico.imagemUrl}
        alt={props.servico.nome}
        width={150}
        height={150}
      />
      <div
        className={`py-2 w-full h-full text-center text-xs
                    ${props.selecionado ? "text-black bg-green-400 font-semibold" : "text-zinc-400 font-light bg-zinc-900"}`}
      >
        {props.servico.nome}
      </div>
    </div>
  );
}
