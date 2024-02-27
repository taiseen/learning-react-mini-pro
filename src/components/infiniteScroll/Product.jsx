const Product = ({ product }) => {
    const { title, price, thumbnail, id } = product;

    return (
        <div className="flex gap-2 items-center justify-between p-2 space-y-2 border rounded border-gray-500">

            <div className="flex flex-col items-start gap-1">
                <p className="bg-gray-400 px-2 py-1 rounded w-fit">Product number: {id}</p>
                <h1 className="text-xl">{title}</h1>
                <p className="text-lg  font-semibold">${price}</p>
            </div>

            <img src={thumbnail} alt={title} className="w-32 h-28 rounded" />
        </div >
    )
}

export default Product