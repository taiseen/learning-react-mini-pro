import { layoutOptions } from "./data";
import { useState } from "react";

const RadioBtn = () => {
    const layouts = layoutOptions.map(data => data.value);

    const [selectedLayout, setSelectedLayout] = useState({ type: 'auto', idx: 0 }); // Set a default layout

    const handleLayoutChange = (e, idx) => setSelectedLayout({ type: e.target.value, idx });

    const dynamicSelection = layouts.includes(selectedLayout.type) && `translateX(${selectedLayout.idx * 100}%)`;

    return (
        <div className="flex bg-white/30 w-fit p-2 mx-auto mt-20 rounded shadow-lg relative">
            <div className="flex rounded-2xl border border-[#C1DEFFFF]">
                {layoutOptions.map((option, idx) => (
                    <div key={option.rID} className="w-[100px] h-[30px] flex items-center justify-center rounded-2xl z-10">
                        <input
                            type="radio"
                            id={option.rID}
                            className="hidden"
                            value={option.value}
                            onChange={(e) => handleLayoutChange(e, idx)}
                            checked={selectedLayout.type === option.value}
                        />

                        <label
                            htmlFor={option.rID}
                            className="flex items-center justify-center gap-1 cursor-pointer py-1 px-3 rounded-2xl duration-300"
                        >
                            {/* access icon file form public folder */}
                            <img src={`/radioIcons/${option.icon}`} alt={option.text} className="w-4 h-4" />
                            {option.text}
                        </label>
                    </div>
                ))}

                <span
                    style={{ transform: dynamicSelection }}
                    className={`absolute w-[100px] h-[30px] border border-[#C1DEFFFF] rounded-2xl opacity-1 bg-[#C2DEFF59] transform transition-transform duration-300 ease-in-out`}>
                </span>
            </div>
        </div >
    )
}

export default RadioBtn