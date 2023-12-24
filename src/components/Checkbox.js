// Checkbox.js

import React, { useState } from "react"

const Checkbox = ({ onCheck }) => {
  const [isChecked, setChecked] = useState(false)

  const handleCheckboxChange = () => {
    setChecked(!isChecked)
    onCheck(!isChecked) // Notify parent component about the change
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span style={{ color: "grey" }}>
        {"  "}I'm happy to receive relevant emails from UNIS
      </span>
    </label>
  )
}

export default Checkbox
