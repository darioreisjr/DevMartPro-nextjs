"use client";
import CartaoProduto from "@/components/produto/cartaoProduto";
import Pagina from "@/components/template/Pagina";
import produtos from "@/data/constants/produto";

export default function Home() {
  return (
    <Pagina>
      <div className="flex gap-5 justify-center flex-wrap">
        {produtos.map((produto) => (
          <CartaoProduto key={produto.id} produto={produto}/>
        ))}
      </div>
    </Pagina>
  );
}
