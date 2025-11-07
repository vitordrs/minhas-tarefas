import FiltroCard from '../../componentes/FiltroCard'
import * as S from './style'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
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

export default BarraLateral
