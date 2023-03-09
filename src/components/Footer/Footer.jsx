import logoIcon from "../../assets/logo2.svg";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer__wrapper">
                    <a href="?" className="header__logo">
                        grace
                    </a>

                    <nav className="menu__navigation">
                        <ul>
                            <li><a href="/">О нас</a></li>
                            <li><a href="/#catalog">Каталог</a></li>
                            <li><a href="/#sale">Скидки</a></li>
                            <li><a href="/#sub">Подписка</a></li>
                            <li><a href="?">Оферта</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;