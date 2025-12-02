import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Box, Typography } from '@mui/material'

const Home = () => {
  return (
    <Box bgcolor={"#FAF9F6"} height={"100%"}>

      <Typography variant='h5' p={"2rem"} textAlign={"center"}>
      Select a friend to chat
      </Typography>

    </Box>
  )
}

export default AppLayout()(Home)