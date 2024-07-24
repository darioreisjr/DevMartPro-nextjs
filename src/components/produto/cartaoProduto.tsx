import useCarrinho from "@/data/hooks/useCarrinho";
import Produto from "@/data/model/Produto";
import Image from "next/image";

export interface CartaoProdutoProps {
  produto: Produto;
}

export default function CartaoProduto(props: CartaoProdutoProps) {
  const { adicionar } = useCarrinho();
  const { id, nome, descricao, preco, imagem } = props.produto;

  return (
    <div className="flex flex-col w-72 bg-zinc-900">
      <div className="relative w-72 h-52">
        <Image src={imagem} alt={nome} fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col gap-4 p-5">
        <h2 className="text-xl font-bold">{nome}</h2>
        <p className="flex-1 text-sm text-zinc-400">{descricao}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">
            {preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <button
            onClick={() => adicionar(props.produto)}
            className="flex-shrink-0 px-4 py-2 text-white font-bold bg-indigo-600 rounded-md"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
