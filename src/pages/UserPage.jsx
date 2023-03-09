import avatar from '../assets/us.jpg';
const UserPage = () => {
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="profile__body">
                        <div className="user_image">
                            <img src={avatar} alt=""/>
                        </div>

                        <div className="user__information">
                            <h2 className="user_name">Иванов Иван Иванович</h2>
                            <p className="user_data">+7 (927) 489-01-99</p>
                            <p className="user_data">г. Казань, ул. Бари Галеева 3А</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserPage;