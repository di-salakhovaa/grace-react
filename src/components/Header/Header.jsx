import {useLocation} from "react-router-dom";
import {useContext} from "react";
import {ModalContext} from "../../pages/Root.jsx";

const CartButton = () => {
    const {toggleModal} = useContext(ModalContext);

    return (
        <button onClick={toggleModal} className="cart_button">Корзина</button>
    )
}
function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <header className={isHomePage ? 'header--fixed' : ''}>
            <div className="container">
                <div className="header__wrapper">
                    <a href="/" className="header__logo">
                        grace
                    </a>

                    <nav className="menu__navigation">
                        <ul>
                            <li><a href="/">О нас</a></li>
                            <li><a href="/#catalog">Каталог</a></li>
                            <li><a href="/#sale">Скидки</a></li>
                            <li><a href="/#sub">Подписка</a></li>
                        </ul>
                    </nav>

                    <div className="buttons">
                        <CartButton/>
                        <a href="/user">
                            Личный кабинет
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;