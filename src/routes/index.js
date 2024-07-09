import App from "../App";
import Ahmed from "../components/Ahmed/Ahmed";
import Amira from "../components/Amira/Amira";
import Katren from "../components/Katren/Katren";
import Mahmoud from "../components/mahmoud/Mahmoud";
import Mohamed from "../components/mohamed/Mohamed";

export const RootRoutes = [
  {
    path: "",
    element: <App />,
    errorElement: <p>error</p>,
    children: [
      {
        path: "/",
        element: <Mohamed />,
      },
      {
        path: "katren",
        element: <Katren />,
      },
      {
        path: "mahmoud",
        element: <Mahmoud />,
      },
      {
        path: "ahmed",
        element: <Ahmed />,
      },
      {
        path: "amira",
        element: <Amira />,
      },
    ],
  },
];
