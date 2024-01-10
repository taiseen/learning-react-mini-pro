import { useState } from "react";

const SidebarItem = ({ data }) => {
  const { icon, title, children } = data ?? {};

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-full hover:bg-green-600/70 hover:text-slate-800 p-2 duration-300 cursor-pointer">
      <div
        onClick={handleToggle}
        className="flex justify-between items-center px-2"
      >
        <span className="text-xl">
          <span>{icon}</span> {title}
        </span>

        {children && (
          <span className={`caret ${isOpen ? "rotate" : ""}`}></span>
        )}
      </div>

      {children && (
        <div className={`overflow-hidden ${isOpen ? "h-auto" : "h-0"}`}>
          {
            // recursively calling - for child menu
            children.map((child, idx) => (
              <SidebarItem key={idx} data={child} />
            ))
          }
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
