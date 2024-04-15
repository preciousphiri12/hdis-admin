import ServiceContext from "@/contexts/controllers/servicesContext";
import Data from "@/data/Data";
import { useContext, useEffect, useState } from "react";

export default function ViewServices() {
  const { services } = useContext(ServiceContext);
  const [fServices, setFServices] = useState(services);

  const filterServices = (event) => {
    let data = services?.filter((item) =>
      item?.uid?.toLowerCase()?.includes(event?.target?.value?.toLowerCase())
    );
    setFServices(data);
    if (event?.target?.value == " ") {
      setFServices(services);
    }
  };
  useEffect(() => {});
  return (
    <div className="mt-1">
      {services === undefined || services === null ? (
        <div className="mx-auto w-full flex flex-col items-center">
          <span>Services loading</span>
        </div>
      ) : (
        <div className="">
          <div className="flex w-full mr-4 shadow-sm mb-2">
            <input
              onChange={filterServices}
              type="text"
              className="w-full p-1 bg-gray-200 rounded-md"
              placeholder="Search service"
            />
          </div>
          <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
            <thead className="bg-gray-50">
              <tr className="bg-gray-200">
                <th
                  scope="col"
                  className="px-1 py-1 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                >
                  serviceDate
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
                  serviceType
                </th>
                <th
                  scope="col"
                  className="px-6 py-1 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                >
                  section
                </th>
                <th
                  scope="col"
                  className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {fServices?.map((service, key) => {
                return (
                  <tr key={key}>
                    <td className="px-1 py-1 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-sm text-gray-600">
                          {service?.serviceDate}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-sm text-gray-600">
                          {service?.description}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-sm text-gray-600">
                          {service?.serviceType.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap">
                      <div className="text-sm text-gray-600">Antenatal</div>
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap  text-sm font-sm">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-600"
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
