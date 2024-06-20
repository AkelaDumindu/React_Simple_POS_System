import React, { useEffect, useState } from 'react';
import DefaultCard from './card/Defaultcard';
import DefaultChart from './card/DefaultChart';
import MinQtyCard from './card/MinQtyCard';
import axios from 'axios';
import Product from './Product';

// Define the Product interface

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [productCount, setProductCount] = useState<number>();
    const [customerCount, setCustomerCount] = useState<number>();
    const [orderCount, setOrderCount] = useState<number>();
    const [income, setIncome] = useState<number>();

    useEffect(() => {
        findAllProducts();

        findAllCount();
    }, []); // Adding an empty dependency array to run once

    const findAllProducts = async () => {
        
            const response = await axios.get('http://localhost:3000/api/v1/products/find-all-min');
            // const response = await axios.get('http://localhost:3000/api/v1/products/find-all-product?searchText=&page=1&size=10');
            setProducts(response.data);
       
    }

    const findAllCount = async () => {
        
        const responseProduct = await axios.get('http://localhost:3000/api/v1/products/find-all-count');
        // const response = await axios.get('http://localhost:3000/api/v1/products/find-all-product?searchText=&page=1&size=10');
        setProductCount(responseProduct.data);

        const responseCustomer = await axios.get('http://localhost:3000/api/v1/customers/find-all-count');
        setCustomerCount(responseCustomer.data);

        const responseOrder = await axios.get('http://localhost:3000/api/v1/orders/find-all-count');
        setOrderCount(responseOrder.data);

        const responseIncome = await axios.get('http://localhost:3000/api/v1/orders/find-all-income');
        setIncome(responseIncome.data.totalCostSum);
   
}
    const maxWidthStyle: React.CSSProperties = {
        maxWidth: '540px'
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard 
                            thumbnail={'https://img.freepik.com/free-photo/business-partners-shaking-hands-agreement_53876-25164.jpg?t=st=1717664384~exp=1717667984~hmac=f46a6c170152f71e5646743a4152a3399d7b7c494c403b2f90c7181d877b1df1&w=360'} 
                            title={'Customers'} 
                            description={'This is a wider card with.'}
                            value={customerCount}
                            key={1}                        
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard 
                            thumbnail={'https://img.freepik.com/free-photo/cosmetic-male-beauty-products-with-display_23-2150435210.jpg?t=st=1717664446~exp=1717668046~hmac=b1870db4cd226d83b41e4557d4289229b4c4889c2f622307c707982c1ede0d1a&w=360'} 
                            title={'Products'} 
                            description={'This is a wider card with.'}
                            value={productCount}
                            key={2}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard 
                            thumbnail={'https://img.freepik.com/free-vector/order-now-banner_52683-48722.jpg?t=st=1717664515~exp=1717668115~hmac=41ed000855650b5cd82710f652c72707a117a5942c47a4129076fa31e2f02f25&w=740'} 
                            title={'Order'} 
                            description={'This is a wider card with.'} 
                            value={orderCount}
                            key={3}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard 
                            thumbnail={'https://img.freepik.com/free-vector/global-stock-market-concept-illustration_114360-19030.jpg?t=st=1717664051~exp=1717667651~hmac=1570df5f6c67db7dc699e7a9a466fa956d4d67f96a8138904d58f646ff4c384e&w=740'} 
                            title={'Income'} 
                            description={'This is a wider card with.'} 
                            value={income}
                            key={4}
                        />
                    </div>
                </div>
            </div>
            <br />
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-md-9">
                        <DefaultChart />
                    </div>
                    <div className="col-12 col-md-3">
                        {products.map((prod, index) => (
                            <MinQtyCard 
                                name={prod.name} 
                                key={index} 
                                image={prod.image} 
                                dscription={prod.description} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
