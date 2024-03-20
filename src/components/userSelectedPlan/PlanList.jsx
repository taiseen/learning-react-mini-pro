import { useUserPlansContext } from "./context/UserPlansContext";

const PlanList = () => {

    const { planList, planTimeObj, handlePlanChange } = useUserPlansContext();
    const { label } = planTimeObj;

    return (
        <div className="flex flex-col gap-4">
            {
                planList.map((item) => (
                    <div
                        key={item.id}
                        className="relative bg-red-200 flex flex-col gap-1 rounded"
                    >

                        <label
                            className="bg-slate-400 p-2 rounded-t flex gap-2 cursor-pointer font-bold"
                        >
                            <input
                                type="radio"
                                value={item.plan}
                                checked={item.isChecked}
                                onChange={() => handlePlanChange(item.id)}
                            />

                            {'Plan ' + item.plan.toUpperCase()}
                        </label>

                        <ul className="px-2">
                            {
                                label === 'yearly' &&
                                <li
                                    className="px-2 inline font-bold border rounded border-orange-700"
                                >
                                    100% OFF
                                </li>
                            }

                            {
                                // plan offer's display...
                                item.offers.map(offer => <li key={offer}>{offer}</li>)
                            }
                        </ul>

                        <div className="bg-slate-400 pl-2 rounded-b">
                            <p className="font-bold">
                                {item.price[label]?.listedPrice}
                            </p>

                            <p className="line-through">
                                {item.price[label]?.actualPrice}
                            </p>
                        </div>

                        {
                            // related image display...
                            item.logo &&
                            <img
                                src={item.logo}
                                className="absolute bottom-2 right-2.5 w-5 h-5"
                            />
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default PlanList