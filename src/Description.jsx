// @ts-check

import { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
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
      <div className="content">
        <div className="content_description">あなたトトロっていうのね！！</div>
        <DogImage imageUrl={dogUrl} />
      </div>
      <div>
        <button onClick={() => fetchDogUrl()}>更新</button>
      </div>
    </>
  )
}

export default Description
