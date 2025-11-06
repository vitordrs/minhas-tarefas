import * as S from './style'

export type Props = {
  ativo?: boolean
}

const FiltroCard = (props: Props) => (
  <S.Card ativo={props.ativo}>
    <S.Contador>3</S.Contador>
    <S.Label>pendente</S.Label>
  </S.Card>
)
export default FiltroCard
