import React from 'react'

export default function (props) {
  return (
    <div className="overlay">
        <div className="modal">
            <p>{props.text}</p>
            <div className="modal-buttons">
                <button onClick={props.handleCancel} className="outline">Cancelar</button>
                <button onClick={props.handleConfirm} >Aceptar</button>
            </div>
        </div>
    </div>
  )
}
