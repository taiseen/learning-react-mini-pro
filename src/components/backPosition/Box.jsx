const Box = ({ item, onOpenBoxObject }) => {

    return (
        <div
            onClick={onOpenBoxObject}
            className="w-[100px] h-[100px] rounded bg-green-400 grid place-items-center cursor-pointer hover:bg-green-600 duration-300"
        >
            {item.title}
        </div>
    )
}

export default Box;

