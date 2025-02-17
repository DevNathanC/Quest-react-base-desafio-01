import React from 'react'
import './App.css'
import TextUppercase from './components/textUppercase/textUppercase'
import Button from './components/button/Button'

function App() {

  return (
    <>
      <TextUppercase label='Click no Botão e veja a mágica!'/>
      <Button messageAlert='PLIM PLOM🧙‍♂️✨ essa é a magica!👍😁😅' />
    </>
  )
}

export default App
