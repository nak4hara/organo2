import './colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Colaborador = ({ aoFavoritar, colaborador, corDeFundo, aoDeletar }) => {

    function favoritar() {
        aoFavoritar(colaborador.id)
    };
    
    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className="colaborador">
            <AiFillCloseCircle
                size={25}
                className='deletar'
                onClick={() => aoDeletar(colaborador.id)}
            // funcao arrow pra enviar o id depois que clicar
            />
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito
                        ? <AiFillHeart {...propsFavorito} color='#ff0000'/>
                        : <AiOutlineHeart {...propsFavorito}/>
                    }
                </div>
            </div>
        </div>)
}

export default Colaborador