import {PRODUCTS} from "../../data/products.jsx";
import Product from "../Products/Product.jsx";
import searchIcon from '../../assets/search.svg'

function Catalog() {
    return (
        <section className="section__background-color">
            <div className="container">
                <div className="wrapper">
                    <div className="section__header">
                        <h2 className="title">Каталог</h2>

                        <div className="search__box">
                            <div className="search_icon">
                                <img src={searchIcon} alt=""/>
                            </div>

                            <input type="text" placeholder="Наименование" className="search_input"/>
                        </div>
                    </div>

                    <div className="catalog__list">
                        {
                            PRODUCTS.map((product) => (
                                <Product id={product.id} url={product.image} name={product.name} price={product.price}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catalog;