const AccordionItem = ({ item, dataSource }) => {
  const isToggle = item.isToggle;

  const handleItemClick = (clickItem) => {
    const { id } = clickItem;

    // manipulate according data source items
    dataSource((pre) => [
      ...pre.map((item) => {
        const isToggle = item.id === id ? !item.isToggle : false;
        return { ...item, isToggle };
      }),
    ]);
  };

  return (
    <div className={`accordionItem ${isToggle ? "show" : ""}`}>
      <button className="btn" onClick={() => handleItemClick(item)}>
        <p>{item.label}</p>
        <span className="direction">{isToggle ? "-" : "+"}</span>
      </button>

      <div className="contentParent">
        <div className="content">{item.renderContent()}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
