import { createContext, useState } from "react";
import ItemCarrinho from "../model/ItemCarrinho";
import Produto from "../model/Produto";

interface ContextoCarrinhoProps {
  itens: ItemCarrinho[];
  qtdeDeItens: number;
  adicionar: (item: Produto) => void;
  remover: (item: Produto) => void;
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as any);

export function ProvedorCarrinho(props: any) {
  const [itens, setIntens] = useState<ItemCarrinho[]>([]);

  function adicionar(produto: Produto) {
    const indice = itens.findIndex((i) => i.produto.id === produto.id);

    if (indice === -1) {
      setIntens([...itens, { produto, quantidade: 1 }]);
    } else {
      const novosItens = [...itens];
      novosItens[indice].quantidade++;
      setIntens(novosItens);
    }
  }

  function remover(produto: Produto) {
    const novosItens = itens
      .map((i) => {
        if (i.produto.id === produto.id) {
          i.quantidade--;
        }
        return i;
      })
      .filter((i) => i.quantidade > 0);

    setIntens(novosItens);
  }

  return (
    <ContextoCarrinho.Provider
      value={{
        itens,
        adicionar,
        remover,
        get qtdeDeItens() {
          return itens.reduce((total, item) => total + item.quantidade, 0);
        },
      }}
    >
      {props.children}
    </ContextoCarrinho.Provider>
  );
}

export default ContextoCarrinho;
