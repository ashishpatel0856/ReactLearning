import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchListOfProducts } from './ProductList'

export const ReactQueryDemo = () => {

    const { data, isLoading } = useQuery({
        queryKey: ['productList'],
        queryFn: fetchListOfProducts
    });
    
    if (isLoading) return <h1>Loading product, please wait...</h1>;

    return (
        <div>
            <h1>React query demo</h1>
            <ul>
                {
                    data?.length > 0 ? (
                        data.map(product => (
                            <li key={product.id}>{product.title}</li>
                        ))
                    ) : (
                        <h2>No product found</h2>
                    )
                }
            </ul>
        </div>
    );
}
