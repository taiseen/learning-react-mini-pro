import { tableBodyData, tableHeaderData } from "./data";
import { useState } from "react";
import CaretIcon from "./CaretIcon";
import "./style/table.css";

const Table = () => {
  const up = "desc";
  const down = "asc";
  const defaultSort = { keyToSort: "make", direction: down };

  const [sort, setSort] = useState(defaultSort);

  const handleHeaderClick = (header) => {
    const { columHeader } = header;

    const sorting = {
      keyToSort: columHeader,
      direction:
        columHeader === sort.keyToSort
          ? sort.direction === down
            ? up
            : down
          : up,
    };

    setSort(sorting);
  };

  const getSortingOrder = (arrayToShort) => {
    return sort.direction === down
      ? arrayToShort.sort((a, b) =>
          a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1
        )
      : arrayToShort.sort((a, b) =>
          a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1
        );
  };

  return (
    <table>
      {/* 🟩🟩🟩🟩🟩 Table Header 🟩🟩🟩🟩🟩*/}
      <thead>
        <tr>
          {tableHeaderData.map((header, idx) => {
            const isSort = sort.keyToSort === header.columHeader;
            const direction = isSort ? sort.direction : down;

            return (
              <th key={idx} onClick={() => handleHeaderClick(header)}>
                <div className="headerContainer">
                  <span>{header.label}</span>

                  {isSort && <CaretIcon direction={direction} />}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>

      {/* 🟩🟩🟩🟩🟩 Table Body 🟩🟩🟩🟩🟩*/}
      <tbody>
        {getSortingOrder(tableBodyData).map((obj) => (
          <tr key={obj.id}>
            {tableHeaderData.map((col, idx) => (
              <td key={idx}>{obj[col.columHeader]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
