import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "../Layout";

export const rootRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route
          index
          lazy={async () => {
            const { default: Home } = await import("../Home");
            return { Component: Home };
          }}
        />
        <Route
          path="/about"
          lazy={async () => {
            const { default: About } = await import("../About");
            return { Component: About };
          }}
        />
        <Route
          path="/portfolio"
          lazy={async () => {
            const { default: Portfolio } = await import("../Portfolio");
            return { Component: Portfolio };
          }}
        />
        <Route
          path="/contact"
          lazy={async () => {
            const { default: Contact } = await import("../Contact");
            return { Component: Contact };
          }}
        />
        <Route
        path="*"
        lazy={async () => {
          const { default: NotFound } = await import("../Notfound/404");
          return { Component: NotFound };
        }}
      />
      </Route>

    </>
  )
);