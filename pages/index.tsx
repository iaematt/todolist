import React, { FC } from 'react'
import Head from 'next/head'

import { Box, Input, Button, List } from '@components/ui'

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Lista de Tarefas | DevBSB</title>
      </Head>

      <Box>
        <Input name="task" placeholder="Digite a tarefa e pressione enter..." />
        <Button>Adicionar tarefa</Button>

        <List />
      </Box>
    </>
  )
}

export default Home
