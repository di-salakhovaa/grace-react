const SaleProduct = ({url, saleCount}) => {
    return (
        <div className="sale__item">
            <a href="?">
                <div className="sale__item_image">
                    <img src={url} alt=""/>
                </div>

                <div className="sale__item_information">
                    <p>{saleCount} %</p>
                </div>
            </a>
        </div>
    )
}
export default SaleProduct;