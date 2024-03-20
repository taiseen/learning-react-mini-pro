import { useUserPlansContext } from "./context/UserPlansContext";

const TotalCalculation = () => {

    const { planTimeObj, selectedPlanObj } = useUserPlansContext();
    const { plan, price } = selectedPlanObj;
    const { label } = planTimeObj;

    const handlePlanParches = (plan) => {
        const priceId = plan.price[label].pricingId;

        console.log(priceId);
        alert(priceId)
    }

    return (
        <div className="bg-orange-300 p-2 rounded">
            <p className="font-bold">Selected Plan</p>

            <p>Your Selected Plan:
                <span className="font-bold pl-1">
                    {plan?.toUpperCase()} - {label}
                </span>
            </p>

            <p>Plan Price:
                <span className="font-bold pl-1">
                    {price?.[label]?.listedPrice}
                </span>
            </p>

            <p
                className="mt-1 p-1 rounded-lg bg-green-500 cursor-pointer text-center text-lg font-bold"
                onClick={() => handlePlanParches(selectedPlanObj)}
            >
                Purchase
            </p>
        </div>
    )
}

export default TotalCalculation;