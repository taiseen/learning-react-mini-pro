import { useUserPlansContext } from "./context/UserPlansContext";

const PlanTimeToggle = () => {

    const { planDuration, handlePlanDurationChange } = useUserPlansContext();

    return (
        <div className="flex justify-evenly">
            {
                planDuration.map(time =>
                    <label
                        key={time.id}
                        className="bg-slate-400 px-2.5 py-1 rounded flex gap-2 cursor-pointer"
                    >
                        <input
                            type="radio"
                            value={time.label}
                            checked={time.isChecked}
                            onChange={() => handlePlanDurationChange(time.id)}
                        />

                        {time.label.toUpperCase()}
                    </label>
                )
            }
        </div>
    )
}

export default PlanTimeToggle