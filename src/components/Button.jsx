import { useState } from 'react'

export function Button(stateBtn, onClick, type, label) {

  const [clicked, setClicked] = useState(stateBtn);

  function handleClick() {
    setClicked(!clicked)
    if (onClick) {
      onClick(!clicked)
    }
  }
  return (
    <button
      onClick={handleClick}
      type={type}>
      {label}
    </button>
  )
}