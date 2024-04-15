"use client";
import ViewLayout from "@/components/layouts/commons/ViewLayout";
import ServiceProvider from "./serviceProvider";
import SectionProvider from "./sectionProvider";
import DrugProvider from "./drugProvider";
import ServiceTypeProvider from "./serviceTypeProvider";
import DrugCategoryProvider from "./drugCategoryProvider";
import UserProvider from "./userProvider";

export function Providers({ children }) {
  return (
    <ViewLayout>
      <UserProvider>
        <ServiceTypeProvider>
          <ServiceProvider>
            <SectionProvider>
              <DrugProvider>
                <DrugCategoryProvider>{children}</DrugCategoryProvider>
              </DrugProvider>
            </SectionProvider>
          </ServiceProvider>
        </ServiceTypeProvider>
      </UserProvider>
    </ViewLayout>
  );
}
