import {useContext} from "react";
import {CartContext} from "../../pages/Root.jsx";
import formatMoney from "../../utils/formatMoney.js";

const CartItem = ({item}) => {
    const {removeCartItemById} = useContext(CartContext);

    return (
        <div className="modal__item">
            <div className="modal__image">
                <img src={item.image} alt=""/>
            </div>

            <div className="modal__information">
                <h3 className="modal__name">{item.name}</h3>
                <p className="modal__price">{formatMoney(item.price)} ₽</p>
                <button onClick={() => removeCartItemById(item.id)} className="modal__delete">Удалить</button>
            </div>
        </div>
    )
}

export default CartItem;