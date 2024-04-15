import DrugContext from "@/contexts/controllers/drugsContext";
import React, { useContext, useState } from "react";

export default function ViewDrugs() {
  const { drugs } = useContext(DrugContext);
  const [filteredDrugs, setFilteredDrugs] = useState(drugs?.drugs);

  const filterdrugs = (event) => {
    let data = drugs?.drugs?.filter(
      (item) =>
        item?.name
          ?.toLowerCase()
          ?.includes(event?.target?.value?.toLowerCase()) ||
        item?.description
          ?.toLowerCase()
          ?.includes(event?.target?.value?.toLowerCase())
    );
    setFilteredDrugs(data);
    if (event?.target?.value == " ") {
      setFilteredDrugs(filteredDrugs);
    }
  };
  return (
    <div className="mt-1">
      {drugs === undefined || drugs === null ? (
        <div className="mx-auto w-full flex flex-col items-center">
          <span>drugs loading</span>
        </div>
      ) : (
        <div className="">
          <div className="flex w-full mr-4 mb-1 mt-1 shadow-sm">
            <input
              onChange={filterdrugs}
              type="text"
              className="w-full p-1 bg-gray-200 rounded-md"
              placeholder="Search section"
            />
          </div>
          <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
            <thead className="bg-gray-50">
              <tr className="bg-gray-200">
                <th
                  scope="col"
                  className="px-6 py-1 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-1 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                >
                  Description
                </th>

                <th
                  scope="col"
                  className="px-6 py-1 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDrugs?.map((section, key) => {
                return (
                  <tr
                    key={key}
                    className="hover:cursor-pointer hover:bg-gray-100"
                  >
                    <td className="px-6 py-1 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-sm text-gray-600">
                          {section?.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap">
                      <div className="text-sm text-gray-600">
                        {section?.description}
                      </div>
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap  text-sm font-sm">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className="ml-2 text-red-600 hover:text-red-900"
                      >
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
