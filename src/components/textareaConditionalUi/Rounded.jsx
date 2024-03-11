const Rounded = ({ textData, setTextData }) => {

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 p-2 bg-gray-400 rounded-full flex gap-1 w-[600px] items-center justify-between"
        >
            <div className="w-10 h-10 bg-orange-600 rounded-full"></div>

            {/* <div className="h-10 bg-orange-500 w-full"></div> */}

            <textarea
                className="w-full rounded h-10 min-h-10 max-h-28 px-1.5 py-1"
                onChange={e => setTextData(e.target.value)}
                value={textData}
            />

            <div className="w-10 h-10 bg-green-600 rounded-full"></div>
        </div>
    )
}

export default Rounded