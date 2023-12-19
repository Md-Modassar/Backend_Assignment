import React from 'react'
import "./popup.css"

const PopUp = ({ isOpen, onClose }) => {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
    <div className="popup-content">
      <button onClick={onClose}>Close</button>
      <p>Opreation Sccessfull</p>
    </div>
  </div>
  )
}

export default PopUp