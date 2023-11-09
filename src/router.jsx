import { createBrowserRouter } from "react-router-dom";
import Decks from "./assets/components/decks/Decks.jsx";
import Layout from "./assets/components/layout/Layout.jsx";
import LearningWrapper from "./assets/components/LearningWrapper.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Decks />,
      },
      {
        path: "/learning/:deckId",
        element: <LearningWrapper />,
      },
    ],
  },
]);

export default router;
