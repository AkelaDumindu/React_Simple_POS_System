import { useEffect, useState } from "react";
import axios from "axios";
import Customer from "./Customer";
import Product from "./Product";

interface Cart{
    _id:string | undefined,
    description:string | undefined,
    unitPrice:number | '',
    qty:number | undefined,
    total:number | undefined

}

const Order:React.FC=()=> {

    const [customers, setCustomers] = useState<Customer[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Cart[]>([]);

    const [selectedCustomers, setSelectedCustomers] = useState<Customer | null>(null);
    const [selectedProducts, setselectedProducts] = useState<Product | null>(null);
    const [address, setAddress] = useState('');
    const [salary, setSalary] = useState<number | ''>('');

    const[name, setName] = useState('');
    const[description, setDescription] = useState('');
    const[unitPrice, setUnitPrice] = useState<number | ''>('');
    const[qtyOnHand, setQtyOnHand] = useState<number | ''>('');
    const[userQty, setUserQty] = useState<number>(0);
    const[totalValue, setTotalValue] = useState<number>(0);

    useEffect(()=>{
        findAllCustomers();
        findAllProducts();
    });

    const findAllCustomers = async ()=>{
        const response = await axios.get('http://localhost:3000/api/v1/customers/find-all-customer');
        // const response = await axios.get('http://localhost:3000/api/v1/customers/find-all-customer?searchText=&page=1&size=10');
        setCustomers(response.data.data);
        
        
    }

    const findAllProducts = async ()=>{
        const response = await axios.get('http://localhost:3000/api/v1/products/find-all-product');
        // const response = await axios.get('http://localhost:3000/api/v1/products/find-all-product?searchText=&page=1&size=10');
        setProducts(response.data.data);
        
        
    }

    const getCustomerId = async (id:string)=>{
        const customer = await axios.get('http://localhost:3000/api/v1/customers/find-customer/'+id);
        setSelectedCustomers(customer.data.data);
        setAddress(customer.data.data.address);
        setSalary(parseFloat(customer.data.data.salary));
    }

    const getProductId = async (id:string)=>{
        const product = await axios.get('http://localhost:3000/api/v1/products/find-product/'+id);
        
        setselectedProducts(product.data);
        setName(product.data.name);
        setDescription(product.data.description);
        setUnitPrice(parseFloat(product.data.unitPrice));
        setQtyOnHand(parseFloat(product.data.qtyOnHand));

    }

    const addToCart = (nawItem:Cart)=>{
        setCart((prevState)=>[...prevState, nawItem]);
    }

    const placeOredr = async ()=>{
        
            
                const response = await axios.post('http://localhost:3000/api/v1/orders/save-order', {
                    date:new Date(),
                    customerDetails:selectedCustomers,
                    totalCost:130,
                    products:cart
                });
        
                
                
               
                
            } 
                
                
            
    

    const StyleOrder:React.CSSProperties = {
        
        marginBottom: '20px'}

    const bottomContext:React.CSSProperties = {
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    }

    const totalTextColor:React.CSSProperties = {
        color:'red',
        margin:'0'
        
    }
        

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3" style={StyleOrder}>
                    <div className="form-group">
                        <label htmlFor="customer">Select Customer</label>
                        <select name="" id="customer" className="form-control" onChange={(e)=>{
                            getCustomerId(e.target.value);
                            
                        }}>
                            <option>Select Customer</option>
                                {customers.map((customer, index)=>(
                                    <option key={index} value={customer._id}>{customer.name}</option>
                                ))}
                
                        </select>
                    </div>
                </div>
                
                <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="address">Customer Address</label>
                            <input value={address} type="text" disabled className="form-control" id="address" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3" style={StyleOrder}> 
                        <div className="form-group">
                            <label htmlFor="address">Customer Address</label>
                            <input value={salary} type="number" disabled className="form-control" id="address" />
                        </div>
                    </div>

                 
            </div>

            <br />
            <hr />

            <div className="row">
                <div className="col-12 col-sm-6 col-md-3" style={StyleOrder}>
                    <div className="form-group">
                        <label htmlFor="product">Select Product</label>
                        <select name="" id="product" className="form-control" onChange={(e)=>{
                            getProductId(e.target.value);
                            
                        }}>
                            <option>Select Product</option>
                                {products.map((product, index)=>(
                                    <option key={index} value={product._id}>{product.name}</option>
                                ))}
                
                        </select>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="form-group">
                            <label htmlFor="description">product Description</label>
                            <input value={name} type="text" disabled className="form-control" id="description" />
                        </div>
                    </div>
                <div className="col-12 col-sm-6 col-md-2">
                        <div className="form-group">
                            <label htmlFor="unitPrice">Unit Price</label>
                            <input value={unitPrice} type="number" disabled className="form-control" id="unitPrice" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2" style={StyleOrder}> 
                        <div className="form-group">
                            <label htmlFor="qtyOnHand">Qty On Hand</label>
                            <input value={qtyOnHand} type="number" disabled className="form-control" id="qtyOnHand" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2" style={StyleOrder}> 
                        <div className="form-group">
                            <label htmlFor="qty">Qty</label>
                            <input onChange={(e)=>{setUserQty(parseFloat(e.target.value))}} type="number" className="form-control" id="qty" />
                        </div>
                    </div>

                 
            </div>
            <div className="row">
            <div className="col-12">
                <button className="btn btn-primary col-12" onClick={()=>{
                    const cartProduct:Cart={
                        
                        
                        _id:selectedProducts?._id,
                        description:description,
                        unitPrice:unitPrice,
                        qty:userQty,
                        total:(userQty*(unitPrice?unitPrice:0))
                    }
                    
                    

                    addToCart(cartProduct);
                }}>Add Product</button>
            </div>
            </div>
            
            <hr />

            <div className="row">
                <div className="col-12">
                    <form className="col-12">
                        <input type="search" className="form-control" placeholder="search customer here" />
                    </form>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <table className="table table-hover table-border">
                        <thead>

                            
                        <tr>
                            <th>#Id</th>
                            <th>product Description</th>
                            <th>Unit Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th>Delete Option</th>
                              
                              
                            
                        </tr>
                        </thead>

                        <tbody>
                        {cart.map((data, index)=>(
                                <tr key={index}>
                                <td>{data._id}</td>
                                <td>{data.description}</td>
                                <td>{data.unitPrice}</td>
                                <td>{data.qty}</td>
                                <td>{data.total}</td>
                                <td>
                                    <button onClick={(e)=>{
                                        setCart((prevState)=>prevState.filter((cartData)=>cartData._id!==data._id));
                                    }} className="btn btn-outline-danger btn-sm">Delete</button>
                                </td>
                               
                            </tr>
                            ))}
                            
                        </tbody>
                    </table>

                    <br />
                    <div className="bottom-context" style={bottomContext}>
                        <div className="total-outer">
                            <h1 style={totalTextColor}>
                                Total : 2550
                            </h1>
                        </div>
                        <div className="place-order-button-context">
                            <button className="btn btn-primary" onClick={()=>{
                                        placeOredr();
                            }}>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Order;

function findAllProducts() {
    throw new Error("Function not implemented.");
}
