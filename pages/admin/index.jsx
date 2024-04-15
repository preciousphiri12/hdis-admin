import MainLayout from "@/components/layouts/main.layout";
import Dashboard from "@/components/widgets/Dashboard";
import { withRouter } from "next/router";
import React from "react";

function Page() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default PageWithRouter;
