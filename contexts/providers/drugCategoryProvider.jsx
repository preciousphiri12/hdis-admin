import React, { useEffect, useState } from "react";
import Data from "@/data/Data";
import DrugCategoryContext from "../controllers/drugCategoriesContext";
import DrugCategoryStore from "@/services/store/drugCategory.store";

export default function DrugCategoryProvider({ children }) {
  const [drugCategories, setDrugCategories] = useState(null);
  const fetchData = () => {
    const data = DrugCategoryStore.getDrugCategories(
      "drug-categories?attributes=id,uid,name,description"
    );
    data
      .then((res) => {
        if (res.status == 200) {
          setDrugCategories(res.data);
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
  }, [drugCategories]);
  return (
    <DrugCategoryContext.Provider value={{ drugCategories, setDrugCategories }}>
      {children}
    </DrugCategoryContext.Provider>
  );
}
