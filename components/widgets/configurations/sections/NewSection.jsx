import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Validations from "@/services/utilities/validations";

export default function NewSection({ newSection }) {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState({
    name: "",
    description: "",
  });
  const sectionOnChangeHandler = (data) => {
    setSection({
      ...section,
      [data.target?.name]: data.target?.value,
    });
  };
  const saveSection = () => {
    let valid = Validations.validate([section?.name, section?.description]);
    if (valid) {
      newSection(section);
      setOpen(false);
    }
  };
  return (
    <div className="">
      <div className="">
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-1 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-500 sm:mt-0 sm:w-auto"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {" "}
          <PlusIcon
            className="-ml-0.5 mr-1.5 size-5 text-gray-50"
            aria-hidden="true"
            color="white"
          />
          New
        </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                      onClick={() => setOpen(false)}
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
                        New Section
                      </Dialog.Title>
                      <div className="mt-2">
                        <div className="">
                          <input
                            onChange={sectionOnChangeHandler}
                            type="text"
                            name="name"
                            className="flex flex-row w-full p-1 bg-gray-200 rounded-md"
                            placeholder="name"
                          />
                        </div>
                        <div className="mt-2">
                          <textarea
                            rows={3}
                            onChange={sectionOnChangeHandler}
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
                      onClick={saveSection}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
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
