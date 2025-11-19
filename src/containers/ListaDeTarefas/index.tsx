import Tarefa from '../../componentes/Tarefa'
import { Container } from './style'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store/idnex'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
    )
  }
  return (
    <Container>
      <p>
        2 tarefa marcadas como:&quot;categoria&ldquo; e &quot;{termo}&ldquo;{' '}
      </p>
      <ul>
        {filtraTarefas().map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
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
