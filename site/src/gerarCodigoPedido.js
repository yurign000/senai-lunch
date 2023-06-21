import { atualizarCodigoPedido } from "./apiConnectUsuarios";

export default function novoCodigoPedido(email){

    const gerarNovoCodigo = () => {
        let characters = (
            'abcdefgijklmopqrstuvwxyz'+
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ'+
            '123456789'
        )
        let codigoPedido = '';
    
        for(let i = 0; i < 10; i++){       
            let cSize = characters.length-1;
            let rCharacter = characters[ Math.round(Math.random()*cSize) ];
    
            codigoPedido += rCharacter;
        }
        return codigoPedido;
    }

    const tentarInserirNovoCodigo = () => {
        atualizarCodigoPedido(email,gerarNovoCodigo()).then(response =>{
            if(response == 'Invalido'){
                gerarNovoCodigo();
                tentarInserirNovoCodigo();
            }
        })   
    }
}