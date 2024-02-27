import { useEffect, useState } from "react";

const productsPerPage = 10;

const useInfiniteScroll = (domRef) => {

    const [page, setPage] = useState(0);
    const [products, setProducts] = useState([]);
    const [hasMore, setHasMore] = useState(true); // default true

    useEffect(() => {

        const fetchProductCall = async () => {

            const url = `https://dummyjson.com/products?limit=${productsPerPage}&skip=${page * productsPerPage}`;

            const response = await fetch(url);
            const data = await response.json();

            if (data.products.length === 0) {
                setHasMore(false) // when touch last limit...
            } else {
                setProducts(pre => [...pre, ...data.products]); // concat new products...
                setPage(pre => pre + 1); // auto increase next page number...
            }
        }

        // all time observe...
        const handelObserver = (item) => {
            const node = item[0];

            if (node.isIntersecting && hasMore) {
                fetchProductCall(); // api call...
            }
        }

        // create instance from js builtin observer api...
        const observer = new IntersectionObserver(handelObserver)

        if (observer && domRef.current) {
            // observe this dom node, when its become visible...
            observer.observe(domRef.current);
        }

        return () => {
            // cline-up observer
            if (observer) observer.disconnect();
        }

    }, [hasMore, page, domRef]);

    return { products, hasMore };
}

export default useInfiniteScroll;