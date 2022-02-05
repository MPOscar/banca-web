import Comments from "./Comments";
import Answers from "./Answers";

const routes = [
  {
    type: "comments",
    name: "Comments",
    key: "comments",
    route: "/comments",
    component: <Comments />,
  },
  {
    type: "answers",
    name: "Answers",
    key: "answers",
    route: "/answers",
    component: <Answers />,
  }
];

export default routes;
