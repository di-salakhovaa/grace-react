import {NavLink} from "react-router-dom";

const SaleProduct = ({id, url, saleCount}) => {
    return (
        <div className="sale__item">
            <NavLink to={'/products/' + id}>
                <div className="sale__item_image">
                    <img src={url} alt=""/>
                </div>

                <div className="sale__item_information">
                    <p>{saleCount} %</p>
                </div>
            </NavLink>
        </div>
    )
}
export default SaleProduct;