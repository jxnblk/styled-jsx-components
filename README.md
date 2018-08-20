
# styled-jsx-components

[styled-components][]-like HOC for [styled-jsx][]

```sh
npm i styled-jsx-components
```

```js
import styled from 'styled-jsx-components'
import { color } from 'styled-system'

const Box = styled('div')`
  padding: 32px;
  ${color}
`
```

[styled-components]: https://github.com/styled-components/styled-components
[styled-jsx]: https://github.com/zeit/styled-jsx
