import useUsuario from "@/data/hooks/useUsuario";
import { Usuario } from "@barba/core";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Image from "next/image";

export interface MenuUsuarioProps {
  usuario: Usuario;
}

export default function MenuUsuario(props: MenuUsuarioProps) {
  const { sair } = useUsuario();

  return props.usuario ? (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-2 items-center">
          <div className="flex flex-col items-end">
            <span className="text-lg font-bolf leading-5">
              {props.usuario.nome}
            </span>
            <span className="text-xs text-zinc-400">{props.usuario.email}</span>
          </div>
          <div className="flex-justify-center items-center rounded-full overflow-hidden w-10 h-10 o-1 bg-zinc-700">
            <Image
              src="/avatar.png"
              width={40}
              height={40}
              alt={props.usuario.nome}
            />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Menu Usuário</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : null;
}
