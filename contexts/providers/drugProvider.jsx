import React, { useEffect, useState } from "react";
import DrugContext from "../controllers/drugsContext";
import DrugStore from "@/services/store/drug.store";

export default function DrugProvider({ children }) {
  const [drugs, setDrugs] = useState(null);
  const fetchData = () => {
    const data = DrugStore.getDrugs("drugs?attributes=id,uid,name,description");
    data
      .then((res) => {
        if (res.status == 200) {
          setDrugs(res.data);
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
  };
  useEffect(() => {
    fetchData();
  }, [drugs]);
  return (
    <DrugContext.Provider value={{ drugs, setDrugs }}>
      {children}
    </DrugContext.Provider>
  );
}
