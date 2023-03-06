import logoIcon from "../../assets/logo2.svg";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer__wrapper">
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
                            <li><a href="?">Оферта</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;