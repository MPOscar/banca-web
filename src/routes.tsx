import AboutsComponent from "./banca/modules/Abouts/Abouts";
import CincoDeOroComponent from "./banca/modules/CincoDeOro/UltimaJugada/CincoDeOroComponent";
import BuscarJugadasComponent from "./banca/modules/CincoDeOro/BuscarJugadas/BuscarJugadas";
import TombolaComponent from "./banca/modules/Tombola/UltimaJugada/TombolaComponent";

const routes = [
  {
    type: "collapse",
    name: "Cinco de Oro",
    key: "cincoDeOro",
    route: "/cincoDeOro",
    component: <CincoDeOroComponent />,
  },
  {
    type: "collapse",
    name: "Tombola",
    key: "tombola",
    route: "/tombola",
    component: <TombolaComponent />,
  },
  {
    type: "collapse",
    name: "Buscar Jugadas",
    key: "buscarJugadas",
    route: "/buscarJugadas",
    component: <BuscarJugadasComponent />,
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
