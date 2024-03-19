const PlanDuration = ({ planDuration, setPlanDuration }) => {

    const handlePlanTimeChange = (timeId) => {
        const updatedPlanTime = planDuration.map(time =>
            time.id === timeId
                ? { ...time, isChecked: true }
                : { ...time, isChecked: false }
        );

        setPlanDuration(updatedPlanTime);
    }

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
                            onChange={() => handlePlanTimeChange(time.id)}
                        />
                        {time.label.toUpperCase()}
                    </label>
                )
            }
        </div>
    )
}

export default PlanDuration