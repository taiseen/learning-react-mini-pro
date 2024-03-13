const ListItem = ({ item, isOpen, handleClick }) => {

    const absoluteStyle = 'cursor-pointer hover:bg-green-200 rounded p-2 duration-200';

    const handleChildClick = (e) => {
        e.stopPropagation(); // stop bubbling effect

        console.log(`${item.title} - ${e.target.innerHTML}`);

        setTimeout(() => {
            // auto close after 1s...
            handleClick();
        }, 1000)
    }

    return (
        <div
            onClick={handleClick}
            className="relative p-2 bg-slate-400 rounded cursor-pointer hover:bg-slate-500 duration-200"
        >
            {item.title}

            <div
                className={`absolute top-0 right-[-230px] flex gap-3 bg-red-300 rounded duration-200 origin-left ${isOpen ? 'scale-100 visible' : 'scale-0 invisible'}`}
            >
                <p className={absoluteStyle} onClick={handleChildClick}>Item 1</p>
                <p className={absoluteStyle} onClick={handleChildClick}>Item 2</p>
                <p className={absoluteStyle} onClick={handleChildClick}>Item 3</p>
            </div>
        </div>
    )
}

export default ListItem