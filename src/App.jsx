// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const fetchDogUrl = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const responseData = await response.json()
      setDogUrl(responseData.message)
    } catch (error) {
      console.log('error', error)
      throw error
    }
  }
  const FIRST_DOG_URL =
    'https://images.dog.ceo/breeds/affenpinscher/n02110627_11759.jpg'

  const [dogUrl, setDogUrl] = useState(FIRST_DOG_URL)

  return (
    <>
      <header className="header">ODENDAYO!!</header>
      <div className="content">
        <div className="content_description">あなたトトロっていうのね！！</div>
        <img src={dogUrl} className="content_img" />
      </div>
      <div>
        <button onClick={() => fetchDogUrl()}>更新</button>
      </div>
    </>
  )
}
