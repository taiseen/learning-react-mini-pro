import { useState } from "react";

const StarRating = () => {

    const ratingNumbers = [1, 2, 3, 4, 5];

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const hoverRating = (rating && hover) || hover;

    return (
        <div className="mx-auto bg-gray-100 w-1/2 p-4 rounded flex flex-col items-center gap-2">
            <p className="text-lg">StarRating</p>

            <div className="flex">
                {
                    ratingNumbers.map(num =>
                        <button
                            key={num}
                            onClick={() => setRating(num)}
                            onMouseOver={() => setHover(num)}
                            onMouseLeave={() => setHover(rating)}
                            className="cursor-pointer border-0 outline-none"
                        >
                            <span
                                className={`text-5xl duration-200 px-1
                                ${num <= hoverRating ? 'text-yellow-500' : 'text-gray-700'}`}
                            >
                                &#9733;
                            </span>
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default StarRating