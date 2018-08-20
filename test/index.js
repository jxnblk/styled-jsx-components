import React from 'react'
import { create as render } from 'react-test-renderer'
import flush from 'styled-jsx/server'
import styled from '../src'

test('returns a component', () => {
  const Comp = styled('div')``
  expect(typeof Comp).toBe('function')
})

test('keeps classNames', () => {
  const Comp = styled('div')``
  const json = render(<Comp className='hello' />).toJSON()
  expect(json.props.className).toEqual(
    expect.stringContaining('hello')
  )
})

// no idea how to test this...
test.skip('interpolates arguments', () => {
  const blue = '#07c'
  const Comp = styled('div')`
    font-size: 32px;
    color: ${blue};
  `
  const json = render(<Comp />).toJSON()
  const [ style ] = flush()
  // console.log(json)
  // console.log(style.props.dangerouslySetInnerHTML.__html)
})
