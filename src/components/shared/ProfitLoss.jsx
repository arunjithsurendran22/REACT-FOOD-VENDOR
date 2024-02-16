import React, { useEffect, useState } from "react";
import api from "../authorization/api";
import ProfitLossChart from "./ProfitLossChart";

const ProfitLoss = () => {
  const [profitLossData, setProfitLossData] = useState(null);

  useEffect(() => {
    const fetchProfitLoss = async () => {
      try {
        const response = await api.get("/dashboard/profit-loss");
        setProfitLossData(response.data.profitLossPerDay);
      } catch (error) {
        console.log("failed to get data");
      }
    };
    fetchProfitLoss();
  }, []);

  return (
    <div className="container mx-auto h-96 mt-20">
      {profitLossData && <ProfitLossChart data={profitLossData} />}
    </div>
  );
};

export default ProfitLoss;
