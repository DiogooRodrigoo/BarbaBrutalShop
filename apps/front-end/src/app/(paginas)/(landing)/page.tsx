"use client";

import TituloSlogan from "@/components/landing/TituloSlogan";
import NossosProfissionais from "@/components/profissional/NossosProfissionais";
import NossosServicos from "@/components/servico/NossosServicos";
import ContainerComBackground from "@/components/shared/ContainerComBackground";

export default function Landing() {
  return (
    <div>
      <TituloSlogan />
      {/* Seção de Serviços */}
      <ContainerComBackground imagem="/banners/servicos.webp">
        <NossosServicos />
      </ContainerComBackground>

      {/* Seção de Profissionais */}
      <ContainerComBackground imagem="/banners/profissionais.webp">
        <NossosProfissionais />
      </ContainerComBackground>
    </div>
  );
}
