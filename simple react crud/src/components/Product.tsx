function Product() {
    const StyleOrder:React.CSSProperties = {
        
        marginBottom: '20px'
        
     }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4" style={StyleOrder}>
                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
                        <input type="text" className="form-control" id="productName" />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="form-group">
                            <label htmlFor="unitPrice">Unit Price</label>
                            <input type="number" className="form-control" id="unitPrice" />
                        </div>
                    </div>
                <div className="col-12 col-sm-6 col-md-4">
                <div className="form-group">
                            <label htmlFor="qtyOnHand">Qty On Hand</label>
                            <input type="number" className="form-control" id="qtyOnHand" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={StyleOrder}> 
                <div className="form-group">
                            <label htmlFor="image">image</label>
                            <input type="file" className="form-control" id="image" />
                        </div>
                    </div>

                    <div className="col-12">
                <div className="form-group">
                            <label htmlFor="customerName">Description</label>
                            <textarea role="" className="form-control" id="customerSalary" />
                        </div>
                    </div>
            </div>
                <br />
            <div className="row">
            <div className="col-12">
                <button className="btn btn-primary col-12">Save Product</button>
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
                            <tr>
                                <td>#1001</td>
                                <td>Akela</td>
                                <td>Galle</td>
                                <td>500000</td>
                                <td>
                                    <button className="btn btn-outline-danger btn-sm">Delete</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-success btn-sm">Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-info btn-sm">View</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#1001</td>
                                <td>Akela</td>
                                <td>Galle</td>
                                <td>500000</td>
                                <td>
                                    <button className="btn btn-outline-danger btn-sm">Delete</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-success btn-sm">Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-info btn-sm">View</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
    
}

export default Product;