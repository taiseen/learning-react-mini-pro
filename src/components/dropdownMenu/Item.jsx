const Item = ({ data, selectedOption, setSelectedOption, setIsToggle }) => {
  const isItemSelected = data.id === selectedOption?.id;

  const handleOptionClick = (data) => {
    setSelectedOption(data);
    setIsToggle(false);
  };

  return (
    <button
      key={data.id}
      onClick={() => handleOptionClick(data)}
      className={`option ${isItemSelected ? "selected" : ""}`}
    >
      {data.label}
    </button>
  );
};

export default Item;
