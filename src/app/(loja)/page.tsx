'use client'
import Pagina from "@/components/template/Pagina";
import ContextoCarrinho from "@/data/contexts/ContextoCarrinho";
import { useContext } from "react";

export default function Home() {
  const { numero } = useContext(ContextoCarrinho);

  return (
    <Pagina>
      <div>Início: {numero}</div>
    </Pagina>
  );
}
