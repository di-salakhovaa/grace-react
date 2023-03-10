import {NavLink, useParams} from "react-router-dom";

const Product = ({id, url, name, price}) => {
    return (
        <div className="catalog__item">
            <NavLink to={'/products/' + id}>
                <div className="catalog__item_image">
                    <img src={url} alt=""/>
                </div>

                <div className="catalog__item_information">
                    <h3 className="catalog__item_name">{name}</h3>
                    <p className="catalog__item_price">{price}</p>
                </div>
            </NavLink>
        </div>
    )
}

export default Product;