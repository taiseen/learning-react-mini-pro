import { createContext, useContext, useState } from 'react';
import { planInterval, plans } from '../data';

const UserPlans = createContext();

const UserPlansContext = ({ children }) => {
    // plan timing list...
    const [planDuration, setPlanDuration] = useState(planInterval);
    const planTimeObj = planDuration.find((data) => data.isChecked);

    // user plan list...
    const [planList, setPlanList] = useState(plans);
    const selectedPlanObj = planList.find((data) => data.isChecked);

    const handlePlanDurationChange = (itemId) => {
        const updatedPlanTime = planDuration.map((time) =>
            time.id === itemId ? { ...time, isChecked: true } : { ...time, isChecked: false }
        );

        setPlanDuration(updatedPlanTime);
    };

    const handlePlanChange = (selectedPlanId) => {
        setPlanList((pre) =>
            pre.map((plan) =>
                plan.id === selectedPlanId
                    ? { ...plan, isChecked: true }
                    : { ...plan, isChecked: false }
            )
        );
    };

    const shareInsideDomTree = {
        handlePlanDurationChange,
        handlePlanChange,
        selectedPlanObj,
        planDuration,
        planTimeObj,
        planList,
    };

    return <UserPlans.Provider value={shareInsideDomTree}>{children}</UserPlans.Provider>;
};

// 📢 use for provider 📢
export default UserPlansContext;

// 🎧 use for consumer's 🎧
export const useUserPlansContext = () => useContext(UserPlans);
