import React, { useEffect, useState } from "react";
import Data from "@/data/Data";
import SectionContext from "../controllers/sectionsContext";
import ServiceTypeContext from "../controllers/serviceTypesContext";

export default function ServiceTypeProvider({ children }) {
  const [serviceTypes, setServiceTypes] = useState(null);
  const fetchData = () => {
    const data = Data?.serviceTypes;
    console.log(data);
    setServiceTypes(data);
  };
  useEffect(() => {
    fetchData();
  }, [serviceTypes]);
  return (
    <ServiceTypeContext.Provider value={{ serviceTypes }}>
      {children}
    </ServiceTypeContext.Provider>
  );
}
