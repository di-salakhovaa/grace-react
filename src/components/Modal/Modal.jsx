import {useContext, useRef} from "react";
import {ModalContext} from "../../pages/Root.jsx";
import image from '../../assets/Project_2021_Professional.png';

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
                <div className="modal-top">
                    <h2 className="title">Корзина</h2>

                    <div className="modal-list">
                        <div className="modal__item">
                            <div className="modal__image">
                                <img src={image} alt=""/>
                            </div>

                            <div className="modal__information">
                                <h3 className="modal__name">dhbguvbg</h3>
                                <p className="modal__price">2 260 ₽</p>
                                <a href="#" className="modal__delete">Удалить</a>
                            </div>
                        </div>

                        <div className="modal__item">
                            <div className="modal__image">
                                <img src={image} alt=""/>
                            </div>

                            <div className="modal__information">
                                <h3 className="modal__name">dhbguvbg</h3>
                                <p className="modal__price">2 260 ₽</p>
                                <a href="#" className="modal__delete">Удалить</a>
                            </div>
                        </div>

                        <div className="modal__item">
                            <div className="modal__image">
                                <img src={image} alt=""/>
                            </div>

                            <div className="modal__information">
                                <h3 className="modal__name">dhbguvbg</h3>
                                <p className="modal__price">2 260 ₽</p>
                                <a href="#" className="modal__delete">Удалить</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal-bottom">
                    <p className="total_price">Итого: <span>2 400 ₽</span></p>
                    <button className="button_order">Оформить заказ</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;