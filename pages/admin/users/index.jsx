import React from "react";

import Router, { withRouter } from "next/router";
import MainLayout from "../../../components/layouts/main.layout";
const Page = () => {
  return <div></div>;
};
const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default PageWithRouter;
