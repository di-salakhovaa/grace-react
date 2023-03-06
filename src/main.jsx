import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Catalog from './components/Catalog/Catalog'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Sale from "./components/Sale/Sale.jsx";
import Sub from "./components/Sub/Sub.jsx";
import Footer from "./components/Footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header/>
        <Main/>
        <Catalog/>
        <Sale/>
        <Sub/>
        <Footer/>
    </React.StrictMode>,
)
