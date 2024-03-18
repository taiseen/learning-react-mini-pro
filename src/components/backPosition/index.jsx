import { useEffect, useRef, useState } from "react";
import { data } from "./data";
import BoxOpen from "./BoxOpen";
import Box from "./Box";
import "./style.css";

const BackPosition = () => {

    const [openBoxObject, setOpenBoxObject] = useState(null);
    const parentContainerRef = useRef(null);
    const savedScrollPosition = useRef(0);

    // console.log(parentContainerRef.current?.scrollTop);

    useEffect(() => {
        if (parentContainerRef.current) {
            parentContainerRef.current.scrollTop = savedScrollPosition.current;
        }
    }, [openBoxObject]);


    const handleOpenBoxObject = (item) => {
        setOpenBoxObject(item);

        if (parentContainerRef.current) {
            savedScrollPosition.current = parentContainerRef.current.scrollTop;
        }
    };


    return (
        <div
            ref={parentContainerRef}
            className={`w-[350px] h-[250px] bg-slate-100 rounded mx-auto p-2 overflow-y-auto customScrollBar grid gap-2 ${openBoxObject ? 'grid-cols-1' : 'grid-cols-3'}`}
        >
            {
                // view list of boxes... for click to open
                !openBoxObject &&
                data.map(item =>
                    <Box
                        item={item}
                        key={item.id}
                        onOpenBoxObject={() => handleOpenBoxObject(item)}
                    />
                )
            }

            {
                // just open clicked box by full view area
                openBoxObject &&
                <BoxOpen
                    openBoxObject={openBoxObject}
                    onBackClick={() => setOpenBoxObject(null)}
                />
            }
        </div>
    )
}

export default BackPosition