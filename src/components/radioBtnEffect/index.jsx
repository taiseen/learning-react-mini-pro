import { Fragment, useState } from "react";
import { radioOptions } from "./data";
import "./style/radioBtn.css";

const RadioBtnEffect = () => {
    const [radioValue, setRadioValue] = useState('');


    return (
        <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center">

            <div className="relative flex p-2.5 rounded-full bg-[#ccc]">
                {
                    radioOptions.map((data) => (
                        <Fragment key={data.rId}>
                            <input
                                className="hidden"
                                type="radio"
                                name="tabs"
                                id={data.rId}
                                checked={radioValue === data.value}
                                value={data.value}
                                onChange={e => setRadioValue(e.target.value)}
                            />
                            <label className="flex items-center justify-center h-[54px] w-[150px] rounded-full cursor-pointer transition-colors duration-150 ease-in z-10" htmlFor={data.rId}>
                                {data.icon} {data.text}
                            </label>
                        </Fragment>
                    ))
                }
                {/* <span className="absolute flex h-14 w-36 bg-gray-500 text-white z-10 rounded-full transition duration-200 ease-in"></span> */}
                <span className="activeStatus"></span>
            </div>
        </div>
    )
}

export default RadioBtnEffect