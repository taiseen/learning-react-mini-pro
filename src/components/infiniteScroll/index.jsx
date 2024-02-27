import { useRef } from "react";
import Product from "./Product";
import useInfiniteScroll from "./useInfiniteScroll";

const InfiniteScroll = () => {

    const loaderRef = useRef(null);

    const { products, hasMore } = useInfiniteScroll(loaderRef);

    return (
        <div className="w-1/3 mx-auto bg-slate-300 text-center">
            <h1 className="text-2xl mb-2">InfiniteScroll</h1>

            <p className="text-lg">Product List</p>

            <div className="space-y-3 p-2">
                {
                    products.map((product) => <Product key={product.id} product={product} />)
                }
            </div>

            {
                hasMore &&
                <div ref={loaderRef} className="bg-green-600 p-3 text-3xl">
                    Loading more products...
                </div>
            }
        </div>
    )
}

export default InfiniteScroll;