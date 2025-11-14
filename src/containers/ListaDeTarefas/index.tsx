import Tarefa from '../../componentes/Tarefa'
import { Container } from './style'

const tarefas = [
  {
    titulo: 'Estudar',
    descricao: 'ver aula da EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar Conta',
    descricao: 'Baixar fatura no email',
    prioridade: 'urgente',
    status: 'concluida'
  },
  {
    titulo: 'Lavar Louça',
    descricao: 'Limpar, secar e guardar',
    prioridade: 'levemente importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
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

export default ListaDeTarefas
