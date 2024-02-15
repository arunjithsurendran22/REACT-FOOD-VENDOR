import DashboardStatus from "../components/shared/DashboardStatus";
import ProfitLoss from "../components/shared/ProfitLoss";
const Dashboard = () => {
  return (
    <div >
      <div>
        <DashboardStatus />
        <ProfitLoss/>
      </div>
    </div>
  );
};

export default Dashboard;
