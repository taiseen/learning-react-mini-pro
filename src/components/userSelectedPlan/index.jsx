import TotalCalculation from "./TotalCalculation";
import PlanTimeToggle from "./PlanTimeToggle";
import PlanList from "./PlanList";

const UserSelectedPlan = () => {

    return (
        <div className="w-96 flex flex-col gap-3 p-2 bg-slate-200 rounded mx-auto">

            <PlanTimeToggle />

            <PlanList />

            <TotalCalculation />

        </div>
    );
}

export default UserSelectedPlan