import React from "react";


const Modal = (props) =>{
    const handleRemoveBackdrop = ()=>{
        props.onCancel();
    }
    //This handles the deleting upon confirm
    const handleConfirm = ()=>{
        props.onConfirm();
    }
    return(
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={handleRemoveBackdrop}>Cancel</button>
            <button className="btn" onClick={handleConfirm}>Confirm</button>
        </div>
    )
}

export default Modal;