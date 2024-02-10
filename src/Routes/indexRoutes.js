import React from "react";
import PublicRoutes from "./publicRoutes";
import Layout from "../Components/Layout";

const IndexRoutes = () => {
  return (
    <>
      <Layout>
        <PublicRoutes />
      </Layout>
    </>
  );
};

export default IndexRoutes;
