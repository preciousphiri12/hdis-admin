import ServiceTypeContext from "@/contexts/controllers/serviceTypesContext";
import React, { useContext, useState } from "react";

export default function ViewServiceTypes() {
  const { serviceTypes } = useContext(ServiceTypeContext);
  const [fServices, setFServices] = useState(serviceTypes);

  const filterServiceTypes = (event) => {
    let data = serviceTypes?.filter(
      (item) =>
        item?.name
          ?.toLowerCase()
          ?.includes(event?.target?.value?.toLowerCase()) ||
        item?.description
          ?.toLowerCase()
          ?.includes(event?.target?.value?.toLowerCase())
    );
    setFServices(data);
    if (event?.target?.value == " ") {
      setFServices(fServices);
    }
  };
  return (
    <div className="mt-1">
      {serviceTypes === undefined || serviceTypes === null ? (
        <div className="mx-auto w-full flex flex-col items-center">
          <span>serviceTypes loading</span>
        </div>
      ) : (
        <div className="">
          <div className="flex w-full mr-4 shadow-sm mb-2">
            <input
              onChange={filterServiceTypes}
              type="text"
              className="w-full p-1 bg-gray-200 rounded-md"
              placeholder="Search service"
            />
          </div>

          <table class="min-w-full divide-y divide-gray-200 overflow-x-auto">
            <thead class="bg-gray-50">
              <tr className="bg-gray-200">
                <th
                  scope="col"
                  class="px-6 py-1 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="px-6 py-1 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                >
                  Description
                </th>

                <th
                  scope="col"
                  class="px-6 py-1 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {fServices?.map((section, key) => {
                return (
                  <tr
                    key={key}
                    className="hover:cursor-pointer hover:bg-gray-100"
                  >
                    <td class="px-6 py-1 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="text-sm font-sm text-gray-600">
                          {section?.name}
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-1 whitespace-nowrap">
                      <div class="text-sm text-gray-600">
                        {section?.description}
                      </div>
                    </td>
                    <td class="px-6 py-1 whitespace-nowrap  text-sm font-sm">
                      <a href="#" class="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                      <a href="#" class="ml-2 text-red-600 hover:text-red-900">
                        Delete
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
