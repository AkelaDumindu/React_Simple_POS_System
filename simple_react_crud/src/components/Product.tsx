import React, { ChangeEvent, useEffect, useState } from "react";
import {storage} from "../config/firebase.ts";
import AxiosInstance  from '../config/axiosInstance';
import { Modal } from "react-bootstrap";

interface Product{
    _id:string,
    name:string,
    description:string,
    image:string,
    unitPrice:number,
    qtyOnHand:number

}



const Product:React.FC=()=> {

        const [products, setProducts] = useState<Product[]>([]);
        const [modalState, setModalState] = useState<boolean>(false);


    	const[image, setImage] = useState<File | null>(null);
        const[name, setName] = useState('');
        const[description, setDescription] = useState('');
        const[unitPrice, setUnitPrice] = useState<number | ''>('');
        const[qtyOnHand, setQtyOnHand] = useState<number | ''>('');

        const[updateImage, setUpdateImage] = useState<File | null>(null);
        const [selectedId, setSelectedId] = useState('');
        const[updateName, setUpdateName] = useState('');
        const[updateDescription, setUpdateDescription] = useState('');
        const[updateUnitPrice, setUpdateUnitPrice] = useState<number | ''>('');
        const[updateQtyOnHand, setUpdateQtyOnHand] = useState<number | ''>('');


        const handleImageChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
            
            // @ts-ignore
                setImage(e.target.files[0]);
            
        }


            useEffect(()=>{
                findAllProducts();
            });

      

        const updateCustomer = async ()=>{
        
        
            try {
                const response = await AxiosInstance.put('/products/update-product/'+selectedId, {
                    name:updateName, description:updateDescription, qtyOnHand:updateQtyOnHand, unitPrice:updateUnitPrice
                });
        
                
               
                setModalState(false);
                findAllProducts();
                
            } catch (error) {
                console.log(error);
                
                
            }
    
        }
        
    
    
    
        const findAllProducts = async ()=>{
            const response = await AxiosInstance.get('/products/find-all-product');
            // const response = await axios.get('/products/find-all-product?searchText=&page=1&size=10');
            setProducts(response.data.data);
            
            
        }
    
        const deleteProduct = async (id: string)=>{
            const response = await AxiosInstance.delete('/products/delete-by-id/'+id);
    
            findAllProducts();
            
        }

        const loadModal = async(id:string)=>{
            const product = await AxiosInstance.get('/products/find-product/'+id);
            setSelectedId(product.data._id);
            
            setUpdateName(product.data.name);
            setUpdateDescription(product.data.description);
            setUpdateImage(product.data.image);
            setUpdateUnitPrice(parseFloat(product.data.unitPrice));
            setUpdateQtyOnHand(parseFloat(product.data.qtyOnHand));
            setModalState(true);
            
        }
    

        const saveProduct = async ()=>{
            let imageUrl = 'data:image/jpeg;base64,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';
            

            if(image){
                try {
                    const storageRef = storage.ref();
                    const imageRef = storageRef.child(`images/${Math.random()+'-'+image.name}`);
                    const snapshot= await imageRef.put(image);
                    imageUrl=await snapshot.ref.getDownloadURL();
                }catch (e) {
                    console.log(e)
                }
            }
            
        
        
            try {
                const response = await AxiosInstance.post('/products/save-product', {
                    name, description, qtyOnHand, unitPrice, image: imageUrl
                });
        
                
                setName('');
                setDescription('');
                setQtyOnHand('');
                setUnitPrice('');
                
                findAllProducts();
               
                
            } catch (error) {
                console.log(error);
                
                
            }
   
            
        }



    const StyleOrder:React.CSSProperties = {
        
        marginBottom: '20px'
        
     }

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4" style={StyleOrder}>
                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
                        <input value={name} type="text" onChange={(e)=>setName(e.target.value)} className="form-control" id="productName" />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="form-group">
                            <label htmlFor="unitPrice">Unit Price</label>
                            <input value={unitPrice} type="number" onChange={(e)=>setUnitPrice(parseFloat(e.target.value))} className="form-control" id="unitPrice" />
                        </div>
                    </div>
                <div className="col-12 col-sm-6 col-md-4">
                <div className="form-group">
                            <label htmlFor="qtyOnHand">Qty On Hand</label>
                            <input value={qtyOnHand} type="number" onChange={(e)=>setQtyOnHand(parseFloat(e.target.value))} className="form-control" id="qtyOnHand" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={StyleOrder}> 
                <div className="form-group">
                            <label htmlFor="image">image</label>
                            <input  type="file" onChange={handleImageChange} className="form-control" id="image" />
                        </div>
                    </div>

                    <div className="col-12">
                <div className="form-group">
                            <label htmlFor="customerName">Description</label>
                            <textarea value={description} rows={5} onChange={(e)=>setDescription(e.target.value)} className="form-control" id="customerSalary" />
                        </div>
                    </div>
            </div>
                <br />
            <div className="row">
            <div className="col-12">
                <button onClick={saveProduct} className="btn btn-primary col-12">Save Product</button>
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
                            <th>product Name</th>
                            <th>Qty on hand</th>
                            <th>unitPrice</th>
                            <th>Delete Option</th>
                            <th>Update Option</th>  
                            <th>See more</th>  
                            
                        </tr>
                        </thead>

                        <tbody>
                            {products.map((product, index)=>
                                <tr key={index}>
                                <td>#{index}</td>
                                <td>{product.name}</td>
                                <td>{product.qtyOnHand}</td>
                                <td>{product.unitPrice}</td>
                                <td>
                                    <button
                                        onClick={()=>{
                                            if(confirm('Are you sure')){
                                                deleteProduct(product._id)
                                            }
                                        }}
                                     className="btn btn-outline-danger btn-sm">Delete</button>
                                </td>
                                <td>
                                    <button
                                    onClick={()=>{
                                        loadModal(product._id);
                                    }}
                                     className="btn btn-outline-success btn-sm">Update</button>
                                </td>
                                <td>
                                    <button

                                     className="btn btn-outline-info btn-sm">View</button>
                                </td>
                            </tr>
                            )}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/************************************************* */}

    <Modal show={modalState}>
        <div>
                <div className="p-4">
                    <h2>Update Product</h2>
                    <hr />


                

                <div className="col-12">
                    <div className="form-group">
                        <input
                        onChange={(e)=>{setUpdateName(e.target.value)}}
                         type="text" 
                         defaultValue={updateName} className="form-control" />
                    </div>
                </div>
                <br />
                <div className="col-12">
                    <div className="form-group">
                        <input 
                        onChange={(e)=>{setUpdateDescription(e.target.value)}}
                        type="text" defaultValue={updateDescription} className="form-control" />
                    </div>
                </div>
                <br />
                <div className="col-12">
                    <div className="form-group">
                        <input 
                        onChange={(e)=>{setUpdateUnitPrice(e.target.value==''?'':parseFloat(e.target.value))}}
                        type="text" 
                        defaultValue={updateUnitPrice} className="form-control" />
                    </div>
                </div>
                <br />
                <div className="col-12">
                    <div className="form-group">
                        <input 
                        onChange={(e)=>{setUpdateQtyOnHand(e.target.value==''?'':parseFloat(e.target.value))}}
                        type="text" 
                        defaultValue={updateQtyOnHand} className="form-control" />
                    </div>
                </div>
                
                <br />
                <div className="col-12">
                    <button onClick={updateCustomer} type="button" className="btn btn-success col-12">Update Customer</button>
                    <br />
                    <br />
                    <button type="button" className="btn btn-secondary col-12" onClick={()=>setModalState(false)}>Close Modal</button>
                </div>
                
                </div>
                </div>

    </Modal>       
{/************************************************* */}  
        </>
    )
    
}

export default Product;