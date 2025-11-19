import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../componentes/FiltroCard'
import * as S from './style'
import { RootReducer } from '../../store/idnex'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="pendentes" contador={3} />
          <FiltroCard legenda="concluídas" contador={3} />
          <FiltroCard legenda="urgentes" contador={3} />
          <FiltroCard legenda="importantes" contador={3} />
          <FiltroCard legenda="normal" contador={3} />
          <FiltroCard legenda="todas" contador={3} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
