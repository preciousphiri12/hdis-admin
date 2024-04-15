import React, { useEffect, useState } from "react";
import Data from "@/data/Data";
import DrugContext from "../controllers/drugsContext";
import UserContext from "../controllers/usersContext";

export default function UserProvider({ children }) {
  const [users, setUsers] = useState(null);
  const fetchData = () => {
    const data = Data?.users;
    console.log(data);
    setUsers(data);
  };
  useEffect(() => {
    fetchData();
  }, [users]);
  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
}
