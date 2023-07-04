import { createContext,useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({children}) => {
    const [logado, setLogado] = useState(false);

    const logar =    () => setLogado(true);
    const deslogar = () => setLogado(false);
    
    return (
        <UsuarioContext.Provider value={{logado, setLogado, logar, deslogar}}>
            {children}
        </UsuarioContext.Provider>
    )
}