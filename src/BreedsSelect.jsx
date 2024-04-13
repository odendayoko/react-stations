/* eslint-disable react/prop-types */

export const BreedsSelect = ({ breeds, selectedBreed, selectBreed }) => {
  const breedNames = Object.keys(breeds)

  return (
    <select value={selectedBreed} onChange={selectBreed}>
      <option value="">選択してください</option>
      {breedNames.map((breed, index) => (
        <option key={index} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}

export default BreedsSelect
