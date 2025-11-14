import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

export const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new tarefa(
      'Estudar JS',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      '',
      1
    ),
    new tarefa(
      'Estudar TS',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      '',
      2
    ),
    new tarefa(
      'Estudar Python',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      '',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefaSlice.actions
export default tarefaSlice.reducer
