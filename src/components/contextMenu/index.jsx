import { contextMenu, menuData } from "./data/contextMenu";
import { useEffect, useRef, useState } from "react";
import ContextMenu from "./ContextMenu";
import "./styles/menu.css";

const Menu = () => {
  const contextMenuRef = useRef(null);

  const [contextMenuPosition, setContextMenuPosition] = useState(contextMenu);
  const [rightClickItem, setRightClickItem] = useState({});
  const [menu, setMenu] = useState(menuData);

  useEffect(() => {
    const clickHandler = (e) => {
      if (contextMenuRef.current) {
        if (!contextMenuRef.current.contains(e.target)) {
          resetContextMenu();
        }
      }
    };

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  const resetContextMenu = () => {
    setContextMenuPosition((pre) => ({ ...pre, isToggle: false }));
    setMenu(menu.map((data) => ({ ...data, isSelected: false })));
  };

  const handleMenuRightClick = (e, rightClickData) => {
    e.preventDefault();

    const ctxMenuAttribute = contextMenuRef.current.getBoundingClientRect();

    const isLeft = e.clientX < window.innerWidth / 2;
    const x = isLeft ? e.clientX : e.clientX - ctxMenuAttribute.width;
    const y = e.clientY;

    setRightClickItem(rightClickData);
    setContextMenuPosition({ isToggle: true, position: { x, y } });
    setMenu(
      menuData.map((data) => ({
        ...data,
        isSelected: data.id === rightClickData.id,
      }))
    );
  };

  return (
    <div className="menuContainer">
      <ul>
        {menu.map((data, idx) => (
          <li
            key={idx}
            onContextMenu={(e) => handleMenuRightClick(e, data)}
            className={`${data.isSelected ? "selected" : ""}`}
          >
            {data.item}
          </li>
        ))}
      </ul>

      <ContextMenu
        contextMenuRef={contextMenuRef}
        rightClickItem={rightClickItem}
        resetContextMenu={resetContextMenu}
        contextMenuPosition={contextMenuPosition}
      />
    </div>
  );
};

export default Menu;
