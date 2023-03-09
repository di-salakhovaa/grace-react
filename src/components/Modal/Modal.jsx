import {useContext, useRef} from "react";
import {ModalContext} from "../../pages/Root.jsx";

function Modal() {
    const {modal, toggleModal} = useContext(ModalContext);
    const overlayRef = useRef();

    return (
        <div className={`overlay ${modal ? "active" : ""}`} ref={overlayRef}>
            <div className="modal">

            </div>
        </div>
    )
}

export default Modal;