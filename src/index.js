import React from 'react'
import objss from 'objss'
import tags from 'html-tags'

const join = (...args) => args.filter(Boolean).join(' ')

const styled = Tag => (strings = [], ...args) => props => {
  const css = [strings[0]]
  for (let i = 0; i < args.length; i++) {
    const val = args[i]
    const rule = typeof val === 'function' ? val(props) : val
    const str = typeof rule === 'object' ? objss(rule) : rule
    css.push(str, strings[i + 1])
  }

  const style = `.x{${css.join('')}}`

  return (
    <Tag
      {...props}
      className={join('x', props.className)}>
      {props.children}
      <style jsx>{style}</style>
    </Tag>
  )
}

tags.forEach(tag => {
  styled[tag] = styled(tag)
})

export default styled
