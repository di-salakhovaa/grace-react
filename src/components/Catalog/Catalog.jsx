import {PRODUCTS} from "../../data/products.jsx";
import Product from "../Products/Product.jsx";
import searchIcon from '../../assets/search.svg'
import {useState} from "react";

function Catalog() {
    const [products, setProducts] = useState(PRODUCTS);
    const [query, setQuery] = useState("");

    const filterProducts = products.filter((item) => item.name.toLowerCase().includes(query));

    const onChangeQuery = (e) => {
        setQuery(e.target.value.toLowerCase());
    }

    return (
        <section className="section__background-color" id="catalog">
            <div className="container">
                <div className="wrapper">
                    <div className="section__header">
                        <h2 className="title">Каталог</h2>

                        <div className="search__box">
                            <div className="search_icon">
                                <img src={searchIcon} alt=""/>
                            </div>

                            <input type="text" value={query} onChange={(e) => onChangeQuery(e)}
                                   placeholder="Наименование" className="search_input"/>
                        </div>
                    </div>

                    <div className="catalog__list">
                        {
                            filterProducts.length ?
                                filterProducts.map((product) => {
                                    return (
                                        <Product key={product.id} id={product.id} url={product.image}
                                                 name={product.name}
                                                 price={product.price}/>
                                    )
                                })
                                :
                                <h2>По запросу {query} ничего не найдено</h2>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catalog;