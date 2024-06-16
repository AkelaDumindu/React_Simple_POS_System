function Order() {

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
                        <select name="" id="customer" className="form-control">
                            <option value="#" disabled defaultValue={'Use Option'}>Use Option</option>
                            <option value="#">customer 2</option>
                            <option value="#">customer 1</option>
                        </select>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="form-group">
                            <label htmlFor="name">customer name</label>
                            <input type="number" disabled className="form-control" id="name" />
                        </div>
                    </div>
                <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="address">Customer Address</label>
                            <input type="number" disabled className="form-control" id="address" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3" style={StyleOrder}> 
                        <div className="form-group">
                            <label htmlFor="address">Customer Address</label>
                            <input type="number" disabled className="form-control" id="address" />
                        </div>
                    </div>

                 
            </div>

            <br />
            <hr />

            <div className="row">
                <div className="col-12 col-sm-6 col-md-3" style={StyleOrder}>
                    <div className="form-group">
                        <label htmlFor="customer">Select Product</label>
                        <select name="" id="customer" className="form-control">
                            <option value="#" disabled defaultValue={'Use Option'}>Use Option</option>
                            <option value="#">Product 1</option>
                            <option value="#">Product 2</option>
                        </select>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="form-group">
                            <label htmlFor="description">product Description</label>
                            <input type="text" disabled className="form-control" id="description" />
                        </div>
                    </div>
                <div className="col-12 col-sm-6 col-md-2">
                        <div className="form-group">
                            <label htmlFor="unitPrice">Unit Price</label>
                            <input type="number" disabled className="form-control" id="unitPrice" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2" style={StyleOrder}> 
                        <div className="form-group">
                            <label htmlFor="qtyOnHand">Qty On Hand</label>
                            <input type="number" disabled className="form-control" id="qtyOnHand" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2" style={StyleOrder}> 
                        <div className="form-group">
                            <label htmlFor="qty">Qty</label>
                            <input type="number" className="form-control" id="qty" />
                        </div>
                    </div>

                 
            </div>
            <div className="row">
            <div className="col-12">
                <button className="btn btn-primary col-12">Add Product</button>
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
                            <th>Unit Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th>Delete Option</th>
                              
                              
                            
                        </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>#1001</td>
                                <td>product 1</td>
                                <td>200</td>
                                <td>500000</td>
                                <td>500000</td>
                                <td>
                                    <button className="btn btn-outline-danger btn-sm">Delete</button>
                                </td>
                               
                            </tr>
                            <tr>
                                <td>#1002</td>
                                <td>product 1</td>
                                <td>200</td>
                                <td>500000</td>
                                <td>500000</td>
                                <td>
                                    <button className="btn btn-outline-danger btn-sm">Delete</button>
                                </td>
                                
                            </tr>
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
                            <button className="btn btn-primary">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Order;