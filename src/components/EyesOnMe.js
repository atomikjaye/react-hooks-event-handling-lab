// Code EyesOnMe Component Here
function EyesOnMe() {
  function eyesOnMeFocus() {
    console.log('Good!')
  }
  function eyesOnMeBlur() {
    console.log('Hey! Eyes on me!')
  }
  return (
    <button onFocus={eyesOnMeFocus} onBlur={eyesOnMeBlur}>Eyes on me</button>
  )
}

export default EyesOnMe