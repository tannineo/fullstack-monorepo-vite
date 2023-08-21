import { children } from 'solid-js'
import type { JSXElement } from 'solid-js'

import sayHello from '@my/common'
import { email } from '@my/common/schema'

const helloStr = sayHello('Worldie')

const TestButton = (props: { children?: JSXElement; onClick?: () => any }) => {
  const c = children(() => props.children)

  return (
    <button
      class='border-ai bg-shironeri text-red px-2 py-1 m-1 hover:text-blue'
      un-flex='~ row items-center justify-center'
      onClick={() => {
        console.log('button onClick event! => props: ', props)
        alert(`${helloStr} is ${email.validate(helloStr).error ? 'not ' : ''}a email!`)
      }}
    >
      {c()}
    </button>
  )
}

export default TestButton
