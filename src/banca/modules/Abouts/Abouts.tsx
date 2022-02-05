import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import routes from "./aboutRoutes";


function AboutsComponent() {

    const getRoutes = (allRoutes: any) =>
        allRoutes.map((route: any) => {
            if (route.collapse) {
                return getRoutes(route.collapse);
            }

            if (route.route) {
                return <Route path={route.route} element={route.component} key={route.key} />;
            }

            return null;
        });

  return (
    <div className="AboutsComponent">
     <h1>Abouts</h1>
        <Routes>

            { getRoutes(routes) }

            <Route path="*" element={<Navigate to="/abouts/comments" />} />

        </Routes>
    </div>
  );
}

export default AboutsComponent;
