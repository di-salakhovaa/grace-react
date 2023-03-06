import logoIcon from '../../assets/logo.svg'
import userIcon from '../../assets/user.svg'
import basketIcon from '../../assets/basket.svg'

function Header() {
    return (
        <header className="header--fixed">
            <div className="container">
                <div className="header__wrapper">
                    <a href="?" className="header__logo">
                        <img src={logoIcon} alt="" />
                    </a>

                    <nav className="menu__navigation">
                        <ul>
                            <li><a href="?">О нас</a></li>
                            <li><a href="?">Каталог</a></li>
                            <li><a href="?">Отзывы</a></li>
                            <li><a href="?">Гарантии</a></li>
                            <li><a href="?">Контакты</a></li>
                        </ul>
                    </nav>

                    <div className="buttons">
                        <a href="#">
                            <img src={userIcon} alt="" />
                        </a>

                        <a href="#">
                            <img src={basketIcon} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;