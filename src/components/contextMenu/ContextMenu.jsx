import { contextMenuButtons } from "./data/contextMenu";

const ContextMenu = ({
  contextMenuPosition,
  resetContextMenu,
  contextMenuRef,
  rightClickItem,
}) => {
  const { position, isToggle } = contextMenuPosition;

  const left = position.x + 2 + "px";
  const top = position.y + 2 + "px";

  const handleContextMenuClick = (e, btn) => {
    e.stopPropagation();

    btn.onClick(rightClickItem);
    
    resetContextMenu();
  };

  return (
    <menu
      ref={contextMenuRef}
      style={{ top, left }}
      className={`contextMenu ${isToggle ? "show" : ""}`}
    >
      {contextMenuButtons.map((btn, idx) => {
        if (btn.isSpacer) return <hr key={idx}></hr>;

        return (
          <button
            key={idx}
            className="contextMenuBtn"
            onClick={(e) => handleContextMenuClick(e, btn)}
          >
            <span>{btn.text}</span>
            <span className="icon">{btn.icon}</span>
          </button>
        );
      })}
    </menu>
  );
};

export default ContextMenu;
