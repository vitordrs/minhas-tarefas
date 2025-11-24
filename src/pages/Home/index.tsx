import BotaoAdicionar from '../../componentes/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => {
  return (
    <>
      <BarraLateral />
      <ListaDeTarefas />
      <BotaoAdicionar />
    </>
  )
}

export default Home
