"use client";
import Pagina from "@/components/template/Pagina";
import ContextoCarrinho from "@/data/contexts/ContextoCarrinho";
import { useContext } from "react";

export default function PaginaCarrinho() {
  const { numero } = useContext(ContextoCarrinho);

  return (
    <Pagina>
      <div>Carrinho: {numero}</div>
    </Pagina>
  );
}
