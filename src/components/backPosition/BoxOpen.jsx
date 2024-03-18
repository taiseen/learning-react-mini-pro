const BoxOpen = ({ openBoxObject, onBackClick }) => {

    return (
        <div
            className="bg-green-200 w-full h-full rounded border border-gray-700 grid place-items-center relative"
        >
            <span
                onClick={onBackClick}
                className="absolute top-0 left-0 px-2 py-1 m-1 rounded bg-gray-500 cursor-pointer hover:bg-gray-600 duration-300"
            >
                ⬅️
            </span>

            <p className="text-2xl">
                {openBoxObject.description}
            </p>
        </div>
    )
}

export default BoxOpen