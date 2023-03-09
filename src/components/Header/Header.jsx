import logoIcon from '../../assets/logo.svg'
import userIcon from '../../assets/user.svg'
import basketIcon from '../../assets/basket.svg'
import {useLocation} from "react-router-dom";
import {useContext} from "react";
import {ModalContext} from "../../pages/Root.jsx";

const CartButton = () => {
    const {toggleModal} = useContext(ModalContext);

    return (
        <button >Корзина</button>
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
                            <li><a href="/">Каталог</a></li>
                            <li><a href="/">Отзывы</a></li>
                            <li><a href="/">Гарантии</a></li>
                            <li><a href="/">Контакты</a></li>
                        </ul>
                    </nav>

                    <div className="buttons">
                        <CartButton/>
                        <a href="#">
                            Корзина
                        </a>

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