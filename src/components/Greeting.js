import { useState } from 'react'

const Greeting = () => {
  const [changedText, setChangedText] = useState(false)
  const changedTextHandler = () => {
    setChangedText(true)
  }

  return (
    <div>
      <h1>Hello World!</h1>
      {!changedText && <p>Its great to see you!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={changedTextHandler}>Change Text!</button>
    </div>
  )
}
export default Greeting
