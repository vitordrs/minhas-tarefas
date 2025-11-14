import Tarefa from '../../componentes/Tarefa'
import { Container } from './style'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store/idnex'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
