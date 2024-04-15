import DrugContext from "@/contexts/controllers/drugsContext";
import SectionContext from "@/contexts/controllers/sectionsContext";
import ServiceContext from "@/contexts/controllers/servicesContext";
import UserContext from "@/contexts/controllers/usersContext";
import {
  ClockIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewColumnsIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

export default function Dashboard() {
  const { services } = useContext(ServiceContext);
  const { sections } = useContext(SectionContext);
  const { drugs } = useContext(DrugContext);
  const { users } = useContext(UserContext);

  const items = [
    {
      title: "Sections",
      icon: <ViewColumnsIcon width={40} color="blue" />,
      count:
        sections === null || sections === undefined ? "0" : sections?.sections?.length,
      href: "/admin/configurations",
    },
    {
      title: "Services",
      icon: <WrenchScrewdriverIcon width={40} color="blue" />,
      count:
        services === null || services === undefined
          ? "0"
          : services?.filter(
              (service) =>
                service.serviceDate == new Date().toISOString()?.split("T")[0]
            )?.length,
      href: "/admin/configurations",
    },
    {
      title: "Doctors",
      icon: <UserGroupIcon width={40} color="green" />,
      count:
        users === null || users === undefined
          ? "0"
          : users?.filter((user) =>
              user?.userRoles?.some((role) => role?.name == "doctor")
            )?.length,
      href: "/admin/configurations",
    },
    {
      title: "Nurses",
      icon: <UserGroupIcon width={40} color="green" />,
      count:
        users === null || users === undefined
          ? "0"
          : users?.filter((user) =>
              user?.userRoles?.some((role) => role?.name == "nurse")
            )?.length,
      href: "/admin/configurations",
    },
    {
      title: "In Stock",
      icon: <ShoppingBagIcon width={40} color="green" />,
      count: drugs === null || drugs === undefined ? "0" : drugs?.length,
      href: "/admin/configurations/in-stock",
    },
    {
      title: "Out of Stock",
      icon: <ShoppingCartIcon width={40} color="red" />,
      count: drugs === null || drugs === undefined ? "0" : drugs?.length,
      href: "/admin/configurations/out-of-stock",
    },
    {
      title: "Expired Drugs",
      icon: <ExclamationTriangleIcon width={40} color="red" />,
      count: drugs === null || drugs === undefined ? "0" : drugs?.length,
      href: "/admin/configurations/expired-drugs",
    },
    {
      title: "Expiring in Two weeks",
      icon: <ClockIcon width={40} color="red" />,
      count: drugs === null || drugs === undefined ? "0" : drugs?.length,
      href: "/admin/configurations/expire-in-2-weeks",
    },
  ];

  return (
    <div>
      <div className="bg-white py-4 sm:py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl className="mt-4 grid grid-cols-1 gap-1 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {items?.map((item, key) => {
                return (
                  <Link
                    href={item?.href}
                    key={key}
                    className="flex flex-col items-center bg-gray-200/50 p-8 hover:bg-gray-200"
                  >
                    <div className="">{item?.icon}</div>
                    <dt className="text-sm font-semibold leading-6 text-gray-600">
                      {item?.title}
                    </dt>
                    <dd className="text-md font-semibold tracking-tight text-gray-900">
                      {item?.count}
                    </dd>
                  </Link>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
