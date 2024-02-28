import { createPortal } from "react-dom";
import { useEffect } from "react";

const ModalPortal = ({ children }) => {

    // get the modal portal parent location...
    const parentModalDomNode = document.getElementById('modal-portal-root');

    // create new child for modal...
    const childModalDomNode = document.createElement('div');

    useEffect(() => {

        // add child inside parent
        parentModalDomNode.appendChild(childModalDomNode);

        // remove child from parent at cline-up time
        return () => parentModalDomNode.removeChild(childModalDomNode);

    }, [parentModalDomNode, childModalDomNode]);

    // wrap theses coming children inside this createPortal 
    // by following as composite pattern... 
    return createPortal(children, childModalDomNode);
}

export default ModalPortal;