import { createContext } from "react";

const ContextoCarrinho = createContext<any>(null);

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
