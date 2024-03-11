import { useEffect, useRef, useState } from "react";

const Rectangle = () => {

    const textAreaRef = useRef(null);
    const [sHeight, setSHeight] = useState(0);

    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = `${sHeight}px`;
        }
    }, [sHeight]);

    const handleKeyUpAndChange = e => {
        const { value } = e.target;

        if (!value.trim()) {
            textAreaRef.current.style.height = `40px`;
        }

        const lines = value.split('\n').length;
        setSHeight(lines * 40);
    }

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 p-2 flex flex-col gap-3 bg-gray-400 rounded w-[600px]"
        >
            <textarea
                ref={textAreaRef}
                placeholder="Auto dynamic height controlling..."
                className="w-full rounded h-10 min-h-10 max-h-36 px-1.5 py-1"
                onChange={handleKeyUpAndChange}
                onKeyUp={handleKeyUpAndChange}
            />

            <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-orange-600 rounded-full"></div>
                <div className="w-10 h-10 bg-green-600 rounded-full"></div>
            </div>

        </div>
    )
}

export default Rectangle