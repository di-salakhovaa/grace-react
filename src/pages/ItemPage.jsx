import {PRODUCTS} from "../data/products.jsx";
import image from "../assets/Office-365-personal.png"
const ItemPage = () => {
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="item__body">
                        <div className="item__image_body">
                            <div className="item__image">
                                <img src={image} alt=""/>
                            </div>
                        </div>

                        <div className="item__information">
                            <h2 className="item__name">Visual Studio Professional 2022 для 1 ПК</h2>
                            <p className="description">
                                Microsoft Visual Studio — это линейка программного обеспечения от Microsoft, зарекомендовавшая себя как удобный и многофункциональный инструмент для разработки игр, приложений и программ с графическим интерфейсом Microsoft Visual Studio включает в себя компилятор, текстовый редактор, отладчик, а также средство автоматизации сборки и ряд других компонентов, позволяющих осуществлять разработку с большей эффективностью.
                                <br/>
                                <br/>
                                В версии Professional 2022 разработчики провели серьезную работу над оптимизацией. Система стала более отзывчивой, подгрузки стали гораздо быстрее, а ошибок стало заметно меньше. Благодаря этому появилась возможность масштабировать проекты до небывалых ранее величин.
                                <br/>
                                <br/>
                                Также была добавлена функция IntelliCode, которая дописывает строки кода за вас, основываясь как на вашу историю разработки, так и на опыт схожих проектов. Еще серьезно улучшили CodeLens.
                                <br/>
                                <br/>
                                Эта опция помогает легко находить важные аналитические сведения, например о том, какие изменения сделаны, к чему они привели, а также было бы проведено модульное тестирование вашего метода.
                            </p>

                            <p className="price">2 490 ₽</p>

                            <a href="?" className="button_add">Добавить в корзину</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemPage;