import React from 'react'
import CustomButton from '../components/UI/buttons/CustomButton'

const HomePage = () => {

  const handleGuessClick = () => {
    alert('ETH');
  }

  return (
    <>
        <CustomButton onClick={handleGuessClick}>Guess</CustomButton>
    </>
  )
}

export default HomePage