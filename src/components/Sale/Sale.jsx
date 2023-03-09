import {PRODUCTS} from "../../data/products.jsx";
import SaleProduct from "../SaleProduct/SaleProduct.jsx";

function Sale() {

    const filteredProducts = PRODUCTS.filter((item) => item.sale);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="section__header">
                        <h2 className="title">Скидки</h2>
                    </div>

                    <div className="sale__list">
                        {
                            filteredProducts.map((product) =>
                                <SaleProduct id={product.id} url={product.image} saleCount={product.sale_count} />
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sale;