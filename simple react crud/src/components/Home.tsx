import React from 'react';
import DefaultCard from './card/Defaultcard';
import DefaultChart from './card/DefaultChart';
import MinQtyCard from './card/MinQtyCard';

function Home() {

    const maxWidthStyle:React.CSSProperties = {
        maxWidth:'540px'
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
                        value={250}
                        key={1}                        
                        />
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard 
                        thumbnail={'https://img.freepik.com/free-photo/cosmetic-male-beauty-products-with-display_23-2150435210.jpg?t=st=1717664446~exp=1717668046~hmac=b1870db4cd226d83b41e4557d4289229b4c4889c2f622307c707982c1ede0d1a&w=360'} 
                        title={'Products'} 
                        description={'This is a wider card with.'}
                         value={250}
                         key={1}
                         />
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard 
                        thumbnail={'https://img.freepik.com/free-vector/order-now-banner_52683-48722.jpg?t=st=1717664515~exp=1717668115~hmac=41ed000855650b5cd82710f652c72707a117a5942c47a4129076fa31e2f02f25&w=740'} 
                        title={'Order'} 
                        description={'This is a wider card with.'} 
                        value={250}
                        key={1}
                        />
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <DefaultCard 
                thumbnail={'https://img.freepik.com/free-vector/global-stock-market-concept-illustration_114360-19030.jpg?t=st=1717664051~exp=1717667651~hmac=1570df5f6c67db7dc699e7a9a466fa956d4d67f96a8138904d58f646ff4c384e&w=740'} 
                title={'Income'} 
                description={'This is a wider card with.'} 
                value={250}
                key={1}
                />
            </div>

            </div>
        </div>

        <br />

        <div className='container'>
            <div className="row">
                <div className="col-12 col-md-9">
                        <DefaultChart/>
                </div>

                <div className="col-12 col-md-3">
                    <MinQtyCard/>
                    <MinQtyCard/>
                    <MinQtyCard/>
                    <MinQtyCard/>
                    <MinQtyCard/>
                    
                </div>
            </div>
        </div>
        </>
    )
    
}

export default Home;