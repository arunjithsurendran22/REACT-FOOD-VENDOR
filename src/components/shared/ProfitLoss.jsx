import React, { useEffect } from "react";
import api from "../authorization/api";

const ProfitLoss = () => {
  useEffect(() => {
    const fetchProfitLoss = async () => {
      try {
        const response = await api.get("/dashboard/profit-loss");
        console.log(response.data);
      } catch (error) {
        console.log("failed to get data");
      }
    };
    fetchProfitLoss();
  }, []);

  return <div></div>;
};

export default ProfitLoss;
