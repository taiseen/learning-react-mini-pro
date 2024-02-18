import { useState } from "react";
import { layoutOptions } from "./data";

const RadioBtn = () => {
    const layouts = layoutOptions.map(data => data.value);

    const [selectedLayout, setSelectedLayout] = useState({ type: 'auto', idx: 0 }); // Set a default layout

    const handleLayoutChange = (e, idx) => setSelectedLayout({ type: e.target.value, idx });

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
                            checked={selectedLayout === option.value}
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

                <span className={`absolute w-[100px] h-[30px] border border-[#C1DEFFFF] rounded-2xl opacity-1 bg-[#C2DEFF59] duration-300 ease-in-out
                ${layouts.includes(selectedLayout.type) ? `translate-x-[${selectedLayout.idx * 100}%]` : ''}`}>
                </span>
            </div>


        </div >
    )
}

export default RadioBtn