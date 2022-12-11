import React from "react"
import logo from "../logo.svg"

const Modal = ({ open, onclose,category,setCategory }) => {
  if (!open) return null
  return (
    <div onClick={onclose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className="modalContainer"
      >
        <img src={logo} />
        <div className="modalRight">
          <p onClick={onclose} className="closeBtn">
            X
          </p>
          <div className="content">
            <form>
              <label>
              choose your category
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
