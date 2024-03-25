import { useState } from 'react';
import './style/index.css';

const SelectableGrid = ({ rows = 5, cols = 5 }) => {

    const [isMouseDown, setIsMouseDown] = useState(false);
    const [selectedBoxes, setSelectedBoxes] = useState([]);

    // mouse click - enter logic
    const handleMouseDown = (boxNumber) => {
        setIsMouseDown(true);
        setSelectedBoxes([boxNumber]);
    };

    // mouse click - release logic
    const handleMouseUp = () => setIsMouseDown(false)


    // track - currently mouse present, inside which box...
    // track mouse dragging effect
    const handleMouseEnter = (boxNumber) => {

        if (isMouseDown) {
            // free mouse hover box selected...
            // setSelectedBoxes(pre => ([...pre, boxNumber]));

            const startBox = selectedBoxes[0];
            const endBox = boxNumber;

            const startRow = Math.floor((startBox - 1) / cols); // Math.floor((23 - 1) / 10) = 22 / 10 = 2
            const startCol = (startBox - 1) % cols; // (23 - 1) % 10 = 22 % 10 = 2

            const endRow = Math.floor((endBox - 1) / cols);
            const endCol = (endBox - 1) % cols;

            const minRow = Math.min(startRow, endRow);
            const maxRow = Math.max(startRow, endRow);

            const minCol = Math.min(startCol, endCol);
            const maxCol = Math.max(startCol, endCol);

            const boxSelected = []
            for (let row = minRow; row <= maxRow; row++) {
                for (let col = minCol; col <= maxCol; col++) {
                    boxSelected.push(row * cols + col + 1);
                }
            }

            setSelectedBoxes(boxSelected);
        }
    };

    return (
        <div
            className="grid"
            style={{ '--rows:': rows, '--cols': cols }}
            onMouseUp={handleMouseUp}
        >
            {
                [...Array(rows * cols).keys()]
                    .map((_, i) => {

                        const boxNumber = i + 1;

                        return (
                            <div
                                key={i}
                                className={`box 
                                ${selectedBoxes.includes(boxNumber) ? 'bg-green-400' : ''}`}
                                onMouseDown={() => handleMouseDown(boxNumber)}
                                onMouseEnter={() => handleMouseEnter(boxNumber)}
                            >
                                {boxNumber}
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default SelectableGrid