import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./Layout";

export const rootRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route
          index
          lazy={async () => {
            const { default: Home } = await import("./Home");
            return { Component: Home };
          }}
        />
        <Route
          path="/about"
          lazy={async () => {
            const { default: About } = await import("./About");
            return { Component: About };
          }}
        />
      </Route>

    </>
  )
);