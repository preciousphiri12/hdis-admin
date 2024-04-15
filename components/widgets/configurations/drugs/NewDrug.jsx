import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ServiceTypeContext from "@/contexts/controllers/serviceTypesContext";
import DrugCategoryContext from "@/contexts/controllers/drugCategoriesContext";
import Validations from "@/services/utilities/validations";

export default function NewDrug({ openDrug, setOpenDrug, newDrug }) {
  const { drugCategories, setDrugCategories } = useContext(DrugCategoryContext);
  const [drug, setDrug] = useState({
    name: "",
    description: "",
    categoryid: "",
  });
  const getInputs = (e) => {
    setDrug({
      ...drug,
      [e.target.name]: e.target.value,
    });
  };
  const saveData = () => {
    let isValid = Validations.validate([drug.name, drug.description]);
    if (isValid) {
      newDrug(drug);
      setOpenDrug(false);
    }
  };
  return (
    <div className="">
      <Transition.Root show={openDrug} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenDrug}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-start sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setOpenDrug(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="w-full mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        New Drug
                      </Dialog.Title>
                      <div className="flex w-full mr-4">
                        <select
                          name="categoryid"
                          onChange={getInputs}
                          className="block w-full text-sm font-sm transition duration-75 border border-gray-100 p-1 rounded-md shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none"
                        >
                          <option value="">Drug category</option>
                          {drugCategories?.drugCategories?.map(
                            (category, key) => {
                              return (
                                <option key={key} value={category?.uid}>
                                  {category?.name}
                                </option>
                              );
                            }
                          )}
                        </select>
                      </div>
                      <div className="mt-2">
                        <div className="">
                          <input
                            onChange={getInputs}
                            type="text"
                            name="name"
                            className="flex flex-row w-full p-1 bg-gray-200 rounded-md"
                            placeholder="name"
                          />
                        </div>
                        <div className="mt-2">
                          <input
                            onChange={getInputs}
                            type="text"
                            name="description"
                            className="flex flex-row w-full p-1 bg-gray-200 rounded-md"
                            placeholder="description"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                      onClick={saveData}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpenDrug(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
