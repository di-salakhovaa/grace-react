import image from "../../assets/Project_2021_Professional.png";

const CartItems = () => {
    return (
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
    )
}

export default CartItems;