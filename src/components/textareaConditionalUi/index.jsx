import { useEffect, useRef, useState } from "react";

const TextareaConditionalUi = () => {

    const textAreaRef = useRef(null);
    const [sHeight, setSHeight] = useState(0);
    const [textData, setTextData] = useState('');

    const isMoreThen10Char = textData.length > 10;

    useEffect(() => {
        const textarea = textAreaRef.current;

        if (textarea) {
            textarea.focus(); // auto Focus on the input element
            textarea.style.height = `${sHeight}px`;
        }
    }, [sHeight]);

    const handleChangeWithKeyUp = e => {
        const { value } = e.target;

        const textarea = textAreaRef.current;
        const isValuePresent = !value.trim();

        if (isValuePresent) {
            textarea.style.height = `40px`;
        } else {
            textarea.style.height = 'auto'; // Reset height to auto
        }

        const lines = value.split('\n').length; // track line enter press...

        if (lines > 1) {
            setSHeight(lines * 27);
        } else {
            textarea.style.height = `${textarea.scrollHeight}px`;
        }

        setTextData(value);
    }

    const handleFocus = (e) => {
        const { currentTarget } = e;
        currentTarget.setSelectionRange(currentTarget.value.length, currentTarget.value.length);
    }

    return (
        <div>
            <div className={`w-[600px] fixed bottom-4 left-1/2 -translate-x-1/2 p-2 bg-gray-400 duration-100
                ${isMoreThen10Char ? 'rounded ' : 'rounded-full'}`}
            >
                {
                    isMoreThen10Char
                        ? (
                            <div className="flex flex-col gap-3">
                                <textarea
                                    wrap="hard"
                                    autoFocus
                                    ref={textAreaRef}
                                    placeholder="Auto dynamic height controlling..."
                                    className="w-full rounded h-10 min-h-10 max-h-36 px-1.5 py-1 overflow-auto"
                                    onChange={handleChangeWithKeyUp}
                                    onKeyUp={handleChangeWithKeyUp}
                                    onFocus={(e) => handleFocus(e)}
                                    value={textData}
                                />

                                <div className="flex items-center justify-between">
                                    <div className="w-10 h-10 bg-orange-600 rounded-full"></div>
                                    <div className="w-10 h-10 bg-green-600 rounded-full"></div>
                                </div>
                            </div>
                        )
                        : (
                            <div className="flex items-center justify-between gap-1">
                                <div className="w-10 h-10 bg-orange-600 rounded-full"></div>

                                <textarea
                                    wrap="hard"
                                    autoFocus
                                    ref={textAreaRef}
                                    placeholder="Auto dynamic height controlling..."
                                    className="w-full rounded h-10 min-h-10 max-h-36 px-1.5 py-1 overflow-auto"
                                    onChange={handleChangeWithKeyUp}
                                    onFocus={(e) => handleFocus(e)}
                                    value={textData}
                                />

                                <div className="w-10 h-10 bg-green-600 rounded-full"></div>
                            </div>
                        )
                }
            </div>

        </div>
    )
}

export default TextareaConditionalUi