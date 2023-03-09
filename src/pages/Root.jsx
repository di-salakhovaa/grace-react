import Header from "../components/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";
import {createContext, useState} from "react";
import Modal from "../components/Modal/Modal.jsx";

export const ModalContext = createContext(null);
const Root = () => {
    const [modal, setModal] = useState(false);
    const toggleModal = setModal.bind(this, !modal);
    return (
        <ModalContext.Provider value={{modal, toggleModal}}>
            <Modal />
            <Header/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </ModalContext.Provider>
    )
}

export default Root;