import { useState } from "react";
import ModalPortal from "./ModalPortal";
import Modal from "./Modal";

const ModalSystem = ({ modalNum }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="m-4">
            <button
                className="px-2 py-1 rounded bg-orange-400 text-lg"
                onClick={() => setIsModalOpen(true)}
            >
                Click For Open Modal - {modalNum}
            </button>

            {
                isModalOpen &&
                <ModalPortal>
                    <Modal
                        onCloseModal={() => setIsModalOpen(false)}
                        modalNum={modalNum}
                    />
                </ModalPortal>
            }
        </div>
    )
}

export default ModalSystem