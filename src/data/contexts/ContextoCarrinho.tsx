import { createContext } from "react";

interface ContextoCarrinhoProps {
  numero: number;
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as any);

export function ProvedorCarrinho(props: any) {
  return (
    <ContextoCarrinho.Provider
      value={{
        numero: 1000,
      }}
    >
      {props.children}
    </ContextoCarrinho.Provider>
  );
}

export default ContextoCarrinho;
