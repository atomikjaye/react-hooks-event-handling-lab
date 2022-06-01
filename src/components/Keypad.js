// Code Keypad Component Here

function keyPadOnChange(e) {
  console.log('Entering password...')
}

function Keypad() {
  return (
    <>
      <input type="password" onChange={keyPadOnChange} />
    </>
  )
}

export default Keypad