import React, { FC } from 'react'
import Head from 'next/head'

import { Box, Input, Button, List, Footer } from '@components/ui'
import { TodoProvider, useTodo } from '@contexts/Todo'

const Home: FC = () => {
  const { value, setValue } = useTodo()

  return (
    <TodoProvider>
      <Head>
        <title>Lista de Tarefas | DevBSB</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Box>
        <Input
          value={value}
          setValue={setValue}
          name="task"
          placeholder="Digite a tarefa e pressione enter..."
        />
        <Button>Adicionar tarefa</Button>

        <List />

        <Footer />
      </Box>
    </TodoProvider>
  )
}

export default Home
