import { JSXElement, children } from 'solid-js'

const TestButton = (props: { children?: JSXElement; onClick?: () => any }) => {
  const c = children(() => props.children)

  return (
    <button
      class='border-ai bg-shironeri text-red px-2 py-1 m-1 hover:text-blue'
      un-flex='~ row items-center justify-center'
      onClick={() => {
        console.log('button onClick event! => props: ', props)
        alert('Hello World!')
      }}
    >
      {c()}
    </button>
  )
}

export default TestButton
