import AboutsComponent from "./banca/modules/Abouts/Abouts";
import HomeComponent from "./banca/layouts/Home/Home";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    route: "/home",
    component: <HomeComponent />,
  },
  {
    type: "collapse",
    name: "Abouts",
    key: "abouts",
    route: "/abouts/*",
    component: <AboutsComponent />,
  }
];

export default routes;
