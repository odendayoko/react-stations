// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl] = useState(
    'https://images.dog.ceo/breeds/affenpinscher/n02110627_11759.jpg',
  )
  return (
    <>
      <header>
        <h1>ODENDAYO!!</h1>
      </header>
      <div>あなたトトロっていうのね！！</div>
      <img src={dogUrl} />
    </>
  )
}
