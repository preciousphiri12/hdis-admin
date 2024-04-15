import React, { useEffect, useState } from "react";
import ServiceContext from "../controllers/servicesContext";
import Data from "@/data/Data";

export default function ServiceProvider({ children }) {
  const [services, setServices] = useState(null);
  const fetchData = () => {
    const data = Data?.services;
    setServices(data);
  };
  useEffect(() => {
    fetchData();
  }, [services]);
  return (
    <ServiceContext.Provider value={{services}}>
      {children}
    </ServiceContext.Provider>
  );
}
