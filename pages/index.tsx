import React, { FC } from 'react'
import Head from 'next/head'

import { Box, Input, Button, List, Footer } from '@components/ui'
import { TodoProvider, useTodo } from '@contexts/Todo'

const Home: FC = () => {
  return (
    <TodoProvider>
      <Head>
        <title>Lista de Tarefas | DevBSB</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Box>
        <Input name="task" placeholder="Digite a tarefa e pressione enter..." />
        <Button>Adicionar tarefa</Button>

        <List />

        <Footer />
      </Box>
    </TodoProvider>
  )
}

export default Home
