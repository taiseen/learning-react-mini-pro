import ListItem from "./ListItem";
import { useState } from "react";
import { data } from "./data";

const ListItemClick = () => {

    const [openItemId, setOpenItemId] = useState(null);

    const handleClick = (itemId) => {

        // If the same item is clicked again, 
        // it toggles the open state of that item to close it (set to null).

        // If a different item is clicked, 
        // it sets the state to the itemId, indicating that the newly clicked item should be open.

        // This logic ensures that only one item can be open at a time
        setOpenItemId((prevOpenItemId) => (prevOpenItemId === itemId ? null : itemId));
    };

    return (
        <div className="p-2 flex flex-col gap-2 w-1/4">
            {
                data.map(item =>
                    <ListItem
                        key={item.id}
                        item={item}
                        isOpen={openItemId === item.id}
                        handleClick={() => handleClick(item.id)}
                    />
                )
            }
        </div>
    )
}

export default ListItemClick