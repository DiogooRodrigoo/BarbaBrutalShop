"use client";

import useUsuario from "@/data/hooks/useUsuario";
import { usePathname, useRouter } from "next/navigation";

export default function ForcarUsuario(props: any) {
  const { carregando, usuario } = useUsuario();
  const caminho = usePathname();
  const router = useRouter();

  function redirecionarPara(url: string) {
    router.push(url);
    return (
      <div className="flex justify-center items-center h-screen">
        Direcionando...
      </div>
    );
  }

  if (!usuario?.email && carregando) return <div>Carregando...</div>;
  if (!usuario?.email) return redirecionarPara(`/entrar?destino=${caminho}`);

  return props.children;
}
