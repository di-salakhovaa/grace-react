import {useContext, useRef} from "react";
import {ModalContext} from "../../pages/Root.jsx";

function Modal() {
    const {modal, toggleModal} = useContext(ModalContext);
    const overlayRef = useRef();

    const close = (e) => {
        if (e.target === overlayRef.current) {
            toggleModal();
        }
    }
    return (
        <div className={`overlay ${modal ? "active" : ""}`} ref={overlayRef} onClick={(e) => close(e)}>
            <div className="modal">

            </div>
        </div>
    )
}

export default Modal;