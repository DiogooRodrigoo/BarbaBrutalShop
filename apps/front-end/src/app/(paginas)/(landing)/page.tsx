"use client";

import TituloSlogan from "@/components/landing/TituloSlogan";
import NossosServicos from "@/components/servico/NossosServicos";
import ContainerComBacground from "@/components/shared/ContainerComBackground";

export default function Landing() {
  return (
    <div>
      <TituloSlogan />

      <ContainerComBacground imagem="/banners/servicos.webp">
        <NossosServicos />
      </ContainerComBacground>
    </div>
  );
}
