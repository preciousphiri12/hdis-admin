import React, { useEffect, useState } from "react";
import Data from "@/data/Data";
import SectionContext from "../controllers/sectionsContext";
import SectionStore from "@/services/store/section.store";

export default function SectionProvider({ children }) {
  const [sections, setSections] = useState(null);
  const fetchData = () => {
    const data = SectionStore.getSections(
      "sections?attributes=id,uid,name,description"
    );
    data
      .then((res) => {
        if (res.status == 200) {
          setSections(res.data);
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
  }, [sections]);
  return (
    <SectionContext.Provider value={{ sections, setSections }}>
      {children}
    </SectionContext.Provider>
  );
}
