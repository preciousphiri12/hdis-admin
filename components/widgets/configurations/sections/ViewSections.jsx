import SectionContext from "@/contexts/controllers/sectionsContext";
import React, { useContext, useState } from "react";

export default function ViewSections() {
  const { sections } = useContext(SectionContext);
  const [fServices, setFServices] = useState(sections?.sections);

  const filtersections = (event) => {
    let data = sections?.sections?.filter(
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
      {sections === undefined || sections === null ? (
        <div className="mx-auto w-full flex flex-col items-center">
          <span>Sections loading</span>
        </div>
      ) : (
        <div className="">
          <div className="flex w-full mr-4 mb-1 mt-1 shadow-sm">
            <input
              onChange={filtersections}
              type="text"
              className="w-full p-1 bg-gray-200 rounded-md"
              placeholder="Search section"
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
