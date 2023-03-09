function Sub() {
    return (
        <section className="section__background-color" id="sub">
            <div className="container">
                <div className="wrapper">
                    <div className="section__header">
                        <h2 className="title">Будьте в курсе</h2>
                    </div>

                    <p className="subtitle">Подпишитесь на наши обновления, чтобы всегда быть в курсе поставок товаров и акций!</p>

                    <form>
                        <input type="text" placeholder="Email" className="sub__input"/>
                        <button className="sub__button">Подписаться</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Sub;