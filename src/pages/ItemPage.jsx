import {PRODUCTS} from "../data/products.jsx";
import image from "../assets/Office-365-personal.png"
import {useParams} from "react-router-dom";

const ItemPage = () => {
    const params = useParams();
    const prodId = params.id;
    const product = PRODUCTS.find(p => p.id == prodId);

    if (product === undefined) {
        return <h2>Товар не найден</h2>
    } else {
        return (
            <section>
                <div className="container">
                    <div className="wrapper">
                        <div className="item__body">
                            <div className="item__image_body">
                                <div className="item__image">
                                    <img src={product.image} alt=""/>
                                </div>
                            </div>

                            <div className="item__information">
                                <h2 className="item__name">{product.name}</h2>
                                <p className="description">{product.info}</p>

                                <p className="price">{product.price} ₽</p>

                                <a href="?" className="button_add">Добавить в корзину</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ItemPage;