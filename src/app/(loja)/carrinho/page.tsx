"use client";
import Pagina from "@/components/template/Pagina";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function PaginaCarrinho() {
  const { numero } = useCarrinho();

  return (
    <Pagina>
      <div>Carrinho: {numero}</div>
    </Pagina>
  );
}
