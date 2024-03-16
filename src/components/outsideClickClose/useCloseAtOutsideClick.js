import { useEffect } from "react";

const useCloseAtOutsideClick = (parent, child, callBack) => {

    const parentDiv = parent.current;
    const childDiv = child.current;

    useEffect(() => {
        const handelClick = (e) => {
            const clickArea = e.target;

            if (
                !parentDiv.contains(clickArea) &&
                !childDiv.contains(clickArea)
            ) {
                callBack(false);
            }
        }

        window.addEventListener('click', handelClick);

        return () => window.removeEventListener('click', handelClick);

    }, [callBack, childDiv, parentDiv]);
}

export default useCloseAtOutsideClick