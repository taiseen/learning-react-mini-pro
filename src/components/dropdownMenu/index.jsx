import { dropdownMenuData } from "./data";
import { useEffect, useRef, useState } from "react";
import Item from "./Item";
import "./style/dropdown.css";

const DropdownMenu = () => {
  const dropdownRef = useRef(null);

  const [selectedOption, setSelectedOption] = useState(null);
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    const handleOutsideClickOfDropdownDiv = (e) => {
      const dropdownDivReference = dropdownRef.current;

      if (dropdownDivReference) {
        if (!dropdownDivReference.contains(e.target)) {
          setIsToggle(false);
        }
      }
    };

    document.addEventListener("click", handleOutsideClickOfDropdownDiv);

    return () => {
      document.removeEventListener("click", handleOutsideClickOfDropdownDiv);
    };
  }, []);

  //  {isToggle ? "-" : "+"}

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="btn" onClick={() => setIsToggle((pre) => !pre)}>
        <span>
          {selectedOption ? selectedOption.label : "Select Car Brand"}
        </span>
        <span className={`caret ${isToggle ? "rotate" : ""}`}></span>
      </button>

      <div className={`options ${isToggle ? "show" : ""}`}>
        {dropdownMenuData.map((data) => (
          <Item
            data={data}
            key={data.id}
            setIsToggle={setIsToggle}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
