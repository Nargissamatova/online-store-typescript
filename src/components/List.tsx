import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import Product from "./Product"
import { fetchProducts } from "../features/productSlice";
import { calculateTotalOfProducts } from "../utils/utils";

const List = () =>{
    const products = useAppSelector((state) => state.products.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);

const totalOfProducts = calculateTotalOfProducts(products)

    return (
    <div>
    <div>List will be here</div>
    <h2>{totalOfProducts}</h2>
    {products.map((product) => (
    <Product {...product}/>
    ))}
    </div>
)
}

export default List