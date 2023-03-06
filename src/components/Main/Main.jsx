import image from '../../assets/banner.png'
import nextIcon from '../../assets/next.svg'
import prevIcon from '../../assets/prev.svg'
function Main() {
    return (
        <main>
            <div className="slider">
                <div className="slide">
                    <div className="slide">
                        <img src={image} alt="" />
                    </div>
                </div>

                <div className="container">
                    <div className="main__titles">
                        <div className="main__title">
                            <h1>
                                Купить Windows 11 Education <br/>
                                (Для образовательных учреждений)
                            </h1>

                            <a href="?" className="main__button">Перейти</a>
                        </div>
                    </div>

                    <div className="dots">
                        <div className="dot active"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>

                    <div className="arrows">
                        <button className="prev_button">
                            <img src={prevIcon} alt=""/>
                        </button>

                        <button className="next_button">
                            <img src={nextIcon} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;