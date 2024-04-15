import React, { useContext, useReducer, useState } from "react";
import Router, { withRouter } from "next/router";
import MainLayout from "../../../components/layouts/main.layout";
import { Disclosure, Tab } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import ViewServices from "@/components/widgets/configurations/services/View";
import ViewSections from "@/components/widgets/configurations/sections/ViewSections";
import ViewServiceTypes from "@/components/widgets/configurations/services/ViewServiceTypes";
import NewSection from "@/components/widgets/configurations/sections/NewSection";
import NewService from "@/components/widgets/configurations/services/NewService";
import NewServicetype from "@/components/widgets/configurations/services/NewServiceType";
import ViewDrugs from "@/components/widgets/configurations/drugs/ViewDrugs";
import ViewDrugCategories from "@/components/widgets/configurations/drugs/ViewDrugCategories";
import SectionStore from "@/services/store/section.store";
import NewDrug from "@/components/widgets/configurations/drugs/NewDrug";
import NewDrugCategory from "@/components/widgets/configurations/drugs/NewDrugCategory";
import DrugCategoryStore from "@/services/store/drugCategory.store";
import SectionContext from "@/contexts/controllers/sectionsContext";
import DrugStore from "@/services/store/drug.store";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// // inctances
//PAGE
const Page = () => {
  const { setSections } = useContext(SectionContext);
  const tabs = [
    { name: "Sections" },
    { name: "Services" },
    { name: "Human Resource" },
    { name: "Drugs" },
    { name: "Drug Supply Chain" },
  ];
  const [serviceState, setService] = useState("SERVICE");
  const [drugState, setDrugstate] = useState("DRUGS");

  const [openService, setOpenService] = useState(false);
  const [openServiceType, setOpenServiceType] = useState(false);

  const [openDrug, setOpenDrug] = useState(false);
  const [openDrugCategory, setOpenDrugCategory] = useState(false);

  const openServiceHandler = () => {
    if (serviceState == "SERVICE") {
      setOpenService(!openService);
      setOpenServiceType(false);
    } else if (serviceState == "SERVICE_TYPE") {
      setOpenServiceType(!openServiceType);
      setOpenService(false);
    }
  };
  const openDrugHandler = () => {
    if (drugState == "DRUGS") {
      setOpenDrug(!openDrug);
      setOpenDrugCategory(false);
    } else if (drugState == "DRUG_CATEGORIES") {
      setOpenDrugCategory(!openDrugCategory);
      setOpenDrug(false);
    }
  };
  const newSection = (data) => {
    SectionStore.create("section", data)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          const data = SectionStore.getSections(
            "sections?attributes=id,uid,name,description"
          );
          data
            .then((res) => {
              if (res.status == 200) {
                setSections(res.data);
              }
            })
            .catch((e) => {
              if (e.response.status == 403) {
                console.log({
                  error: true,
                  message: "Session expired. Please login.",
                });
              }
            });
        }
      })
      .catch((er) => {
        console.log(er);
      });
  };
  const newDrugCategory = (data) => {
    DrugCategoryStore.create("drug-category", data)
      .then((res) => {
        console.log(res);
      })
      .catch((er) => {
        console.log(er);
      });
  };
  const newDrug = (data) => {
    DrugStore.create("drug", data)
      .then((res) => {
        console.log(res);
      })
      .catch((er) => {
        console.log(er);
      });
  };
  return (
    <>
      {/* <ServiceProvider> */}
      <div className="max-w-2xl mx-auto px-2 sm:px-6 lg:max-w-4xl lg:px-2">
        <div className="align-middle inline-block min-w-full min-h-full mt-5">
          <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white sm:p-5">
            <Tab.Group>
              <div className="border-b border-gray-200 bg-white">
                <Tab.List>
                  <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {tabs?.map((tab) => (
                      <Tab
                        key={tab.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "border-primary-500 text-primary-600"
                              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                            "group inline-flex items-center py-4 px-1 border-b-2 focus:outline-none"
                          )
                        }
                      >
                        <span className="capitalize  font-medium text-sm">
                          {tab.name}
                        </span>
                      </Tab>
                    ))}
                  </nav>
                </Tab.List>
              </div>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="divide-y">
                    <div className="mt-1 lg:flex lg:items-center lg:justify-end">
                      <NewSection newSection={newSection} />
                    </div>
                    <div className="lg:flex lg:items-center mt-1">
                      <ViewSections />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className=" divide-y">
                    <div className="mt-1 lg:flex lg:items-center lg:justify-between">
                      <div className="flex w-full mr-4">
                        <select
                          onChange={(event) => setService(event.target?.value)}
                          className="block w-full text-sm font-sm transition duration-75 border border-gray-100 p-1 rounded-md shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none"
                        >
                          <option value="SERVICE">Services</option>
                          <option value="SERVICE_TYPE">Service type</option>
                        </select>
                      </div>

                      <button
                        onClick={openServiceHandler}
                        type="button"
                        className="inline-flex items-center rounded-md bg-green-600  px-3 py-1 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-500"
                      >
                        <PlusIcon
                          className="-ml-0.5 mr-1.5 size-5 text-gray-50"
                          aria-hidden="true"
                          color="white"
                        />
                        New
                      </button>
                      <NewService
                        openService={openService}
                        setOpenService={setOpenService}
                      />
                      <NewServicetype
                        openServiceType={openServiceType}
                        setOpenServiceType={setOpenServiceType}
                      />
                    </div>
                    <div className="lg:flex lg:items-center mt-1">
                      {serviceState == "SERVICE" ? (
                        <ViewServices />
                      ) : (
                        <ViewServiceTypes />
                      )}
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="divide-y">
                    <div className="mt-1 lg:flex lg:items-center lg:justify-end">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-green-600 px-3 py-1 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-500"
                      >
                        <PlusIcon
                          className="-ml-0.5 mr-1.5 size-5 text-gray-50"
                          aria-hidden="true"
                          color="white"
                        />
                        New
                      </button>
                    </div>
                    <div className="lg:flex lg:items-center mt-1"></div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="">
                    <div className="mt-4 lg:flex lg:items-center lg:justify-between">
                      <div className="flex w-full">
                        <select
                          onChange={(event) =>
                            setDrugstate(event.target?.value)
                          }
                          className="block w-full text-sm font-medium transition duration-75 border border-gray-100 p-2 mr-4 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none"
                        >
                          <option value="DRUGS">Drugs</option>
                          <option value="DRUG_CATEGORIES">
                            Drug categories
                          </option>
                        </select>
                      </div>
                      <button
                        onClick={openDrugHandler}
                        type="button"
                        className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-500"
                      >
                        <PlusIcon
                          className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-50"
                          aria-hidden="true"
                          color="white"
                        />
                        New
                      </button>
                      <NewDrug
                        openDrug={openDrug}
                        setOpenDrug={setOpenDrug}
                        newDrug={newDrug}
                      />
                      <NewDrugCategory
                        openDrugCategory={openDrugCategory}
                        setOpenDrugCategory={setOpenDrugCategory}
                        newDrugCategory={newDrugCategory}
                      />
                    </div>
                    <div className="lg:flex lg:items-center mt-4">
                      {drugState == "DRUGS" ? (
                        <ViewDrugs />
                      ) : (
                        <ViewDrugCategories />
                      )}
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
      {/* </ServiceProvider> */}
    </>
  );
};
const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default PageWithRouter;
