import { useEffect, useState } from "react";
import { Wrapper } from "./Wrapper";
import {Link} from "react-router-dom"

export const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:8000/products');
            const content = await response.json()

            setProducts(content);
        })();
    }, []);

    const del = async id => {
        if(window.confirm('Are you sure to delete this record?')){

            await fetch(`http://localhost:8000/product/${id}`,{
                method: 'DELETE',
                    
            });

            setProducts(products.filter(p => p.pk !== id));
        }

    }

    return <Wrapper>
        <div className="pt-3 pb-2 mb-3 border-bottom">
            <Link to={`/create`} className="btn btn-sm btn-outline-secondary">Add</Link>
        </div>
        <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return <tr key={product.pk}>
                            <td>{product.pk}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>
                                <a href='#' className="btn btn-sm btn-outline-secondary"
                                    onClick={e => del(product.pk)}
                                >
                                    Delete
                                </a>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </Wrapper>
}