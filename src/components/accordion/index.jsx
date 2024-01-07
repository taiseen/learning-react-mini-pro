import AccordionItem from "./AccordionItem";
import { useEffect, useState } from "react";
import { accordionData } from "./data";
import "./style/accordion.css";

const AccordionMenu = () => {
  const [accordionItems, setAccordionItems] = useState(accordionData);

  useEffect(() => {
    setAccordionItems(
      // just when load these data...
      // then by default set a property called
      // isToggle : false
      accordionData.map((item) => ({ ...item, isToggle: false }))
    );
  }, [accordionData]);

  return (
    <div className="accordionMenu">
      {accordionItems.map((item) => (
        <AccordionItem
          item={item}
          key={item.id}
          dataSource={setAccordionItems}
        />
      ))}
    </div>
  );
};

export default AccordionMenu;
