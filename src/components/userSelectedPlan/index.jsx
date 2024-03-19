import TotalCalculation from "./TotalCalculation";
import PlanDuration from "./PlanDuration";
import PlanList from "./PlanList";
import { planInterval, plans } from "./data";
import { useState } from "react";

const UserSelectedPlan = () => {

    const [planDuration, setPlanDuration] = useState(planInterval);
    const planTime = planDuration.find(data => data.isChecked);

    const [selectedPlan, setSelectedPlan] = useState(plans);
    const userPlanSelect = selectedPlan.find(data => data.isChecked);

    return (
        <div className="w-96 flex flex-col gap-3 p-2 bg-slate-200 rounded mx-auto">

            <PlanDuration
                setPlanDuration={setPlanDuration}
                planDuration={planDuration}
            />

            <PlanList
                setSelectedPlan={setSelectedPlan}
                selectedPlan={selectedPlan}
                planTime={planTime}
            />

            <TotalCalculation
                userPlanSelect={userPlanSelect}
                planTime={planTime}
            />

        </div>
    );
}

export default UserSelectedPlan