import React, { Component } from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import Footer from "./banca/layouts/Footer/Footer";
import Navbar from "./banca/layouts/Navbar/Navbar";
import routes from "./routes";

export default class App extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Navbar />

                <Routes>

                    { this.getRoutes(routes) }

                    <Route path="*" element={<Navigate to="/cincoDeOro" />} />

                </Routes>

                <Footer />
            </div>
        );
    }

    public getRoutes = (allRoutes: any) =>
        allRoutes.map((route: any) => {
            if (route.collapse) {
                return this.getRoutes(route.collapse);
            }

            if (route.route) {
                return <Route path={route.route} element={route.component} key={route.key} />;
            }

            return null;
        });


}
