"use client";
import Pagina from "@/components/template/Pagina";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function Home() {
  const { numero } = useCarrinho();
  return (
    <Pagina>
      <div>Início: {numero}</div>
    </Pagina>
  );
}
