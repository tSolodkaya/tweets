import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";

import Layout from "./components/Layout/Layout";
import routes from "./routes";

const Home = lazy(() => import("./pages/Home"));
const Tweets = lazy(() => import("./pages/Tweets"));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.TWEETS} element={<Tweets />} />
        </Route>
        <Route path="*" element={<Navigate to={routes.HOME} replace />} />
      </Routes>
    </div>
  );
};

export default App;
