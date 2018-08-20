import React from 'react'
import { render } from 'react-dom'
import { space, color } from 'styled-system'
import styled from '../src'

const Box = styled.div`
  font-family: system-ui, sans-serif;
  padding: 32px;
  ${space}
  ${color}
`

const div = document.body.appendChild(
  document.createElement('div')
)

const App = () =>
  <Box py={5} color='tomato'>
    <h1>hello</h1>
  </Box>

render(<App />, div)
