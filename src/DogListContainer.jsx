// @ts-check

import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
import DogImage from './DogImage'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')
  const [breedImageUrls, setBreedImageUrls] = useState([])

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all')
        const responseData = await response.json()
        setBreeds(responseData.message)
      } catch (error) {
        console.log('error', error)
        throw error
      }
    }
    fetchBreeds()
  }, [])

  // @ts-ignore
  const selectBreed = event => {
    setSelectedBreed(event.target.value)
  }

  // @ts-ignore
  const showBreedImage = async () => {
    const imageCount = 3

    if (!selectedBreed) {
      return
    }

    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${selectedBreed}/images/random/${imageCount}`,
      )
      const responseData = await response.json()
      setBreedImageUrls(responseData.message)
    } catch (error) {
      console.log('error', error)
      throw error
    }
  }

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        selectBreed={selectBreed}
      />
      <button onClick={showBreedImage}>表示</button>
      {breedImageUrls.map((url, index) => (
        <DogImage imageUrl={url} key={index} />
      ))}
    </>
  )
}

export default DogListContainer
