const Modal = ({ onCloseModal, modalNum }) => {

    // for accessability we add these 2 attributes
    // 1) role="dialog"
    // 2) aria-modal="true"

    // 🚩 & most important thing is:-
    // its follow the react jsx dom tree, so all event's are available...
    // but in actual browser dom tree its add beside react root as a sibling...

    return (
        <div
            role="dialog"
            aria-modal="true"
            className="w-1/2 h-96 bg-black/25 p-4 mx-auto text-white space-y-4 shadow-2xl rounded"
        >
            <div className="flex items-center justify-between">
                <h1 className="text-2xl">Modal number: {modalNum}</h1>

                <button
                    onClick={onCloseModal}
                    className="px-2 py-1 rounded bg-red-400"
                >
                    Close Modal
                </button>
            </div>

            <p className="p-4 border rounded border-yellow-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro cupiditate? Sint temporibus tenetur accusamus repudiandae? At qui aperiam iure.
            </p>
        </div>
    )
}

export default Modal