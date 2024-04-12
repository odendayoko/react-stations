// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const FIRST_DOG_URL =
    'https://images.dog.ceo/breeds/affenpinscher/n02110627_11759.jpg'

  const SECOND_DOG_URL =
    'https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg'

  const [dogUrl, setDogUrl] = useState(FIRST_DOG_URL)

  return (
    <>
      <header>
        <h1>ODENDAYO!!</h1>
      </header>
      <div>あなたトトロっていうのね！！</div>
      <img src={dogUrl} />
      <div>
        <button
          onClick={() => {
            setDogUrl(SECOND_DOG_URL)
          }}
        >
          更新
        </button>
      </div>
    </>
  )
}
