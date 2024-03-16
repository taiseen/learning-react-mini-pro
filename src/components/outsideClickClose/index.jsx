import useCloseAtOutsideClick from "./useCloseAtOutsideClick";
import { useRef, useState } from "react";
import { data } from "./data";

const OutsideClickClose = () => {

    const [isOpen, setIsOpen] = useState(false);

    const parentRef = useRef(null);
    const childRef = useRef(null);

    useCloseAtOutsideClick(parentRef, childRef, setIsOpen);

    const handleItemClick = (item) => {
        console.log(item);
        setIsOpen(false); // by click manually close child container....
    }

    return (
        <div className="relative flex justify-center bg-yellow-100 mt-5" >

            <div
                ref={parentRef}
                onClick={() => setIsOpen(!isOpen)}
                className="w-20 h-14 rounded bg-green-400 flex justify-center items-center cursor-pointer"
            >
                Click me
            </div>

            {/* <DropDown isOpen={isOpen} setIsOpen={setIsOpen} /> */}

            <ul
                ref={childRef}
                className={`absolute top-16 bg-white p-2 rounded flex flex-col gap-2 duration-300 origin-top ease-in ${isOpen ? 'scale-100 visible translate-y-0' : 'scale-0 invisible translate-y-1'}`}
            >
                {
                    data.map(item =>
                        <li
                            key={item}
                            onClick={() => handleItemClick(item)}
                            className="p-2 bg-slate-300 rounded cursor-pointer duration-300 hover:bg-slate-400"
                        >
                            {item}
                        </li>
                    )
                }
            </ul>

        </div>
    )
}

export default OutsideClickClose