import { data } from "./data";

const DropDown = ({ isOpen }) => {

    const handleItemClick = (item) => {
        console.log(item);
    }

    return (
        <ul
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
    )
}

export default DropDown