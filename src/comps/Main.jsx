import React from 'react'

export default function Main() {
  return (
    <div>
        <section>
    <div className="row " >
        <div className="col-sm-5 col-md-6 text-center pt-5">
            <h3>This is Your Order Activites</h3>
           <p className="text-secondary">
            <span >My Order</span><span> > </span><span > Cancelled </span><span> > </span><span className="text-primary"> Succesfull Cancellation</span>
           </p> 
        </div>
        <div className="col-sm-5 offset-sm-2 col-md-6  offset-md-0 pt-5 d-flex justify-content-center ">
            <div className="">
                <h3 className="text-danger ">Succesfull Cancellation</h3>
                <p className="text-secondary">on 23-03-2023 09:50</p>
            </div>
              
        </div>
        
      </div>
</section>
<section className="p-5">
    <div className="row flex-wrap" >
        <div className="col-md-8  mt-5 shadow-5-strong rounded-9 p-3 fw-bold">
          <div className="d-flex">
                <img src="https://www.directsoccer.co.uk/upload/img/747x856/c2980-jc001b-black.jpg" className="h-25 w-25" alt="product" />
            <div className="w-100">
                    <h4>Vendor Name 01</h4>
                    <p className="text-secondary">Cotton Round Neck Half Sleeve</p>
                <div className="d-flex justify-content-between">
                    <p>Required Qty :</p>
                    <p>50</p>
                </div>
                <div className="d-flex justify-content-between ">
                    <p>Amount :</p>
                    <p className="text-danger ">$ 300</p>
                </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="text-secondary">50 Product</p>
            <p>Total Amount :  <span className="text-danger ms-5">$ 1500</span></p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="text-secondary fw-bold">Requested by</p>
            <p style={{color:"#70709c"}}>Customer</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-secondary fw-bold">Requested On</p>
            <p style={{color:"#70709c"}}>23-03-2023 09:50</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-secondary fw-bold">Cause </p>
            <p style={{color:"#70709c"}}>Want to change the payment method</p>
          </div>
        </div>
        <div className="col-sm-12  col-md-4  pt-5 offset-md-0  px-4 ">
            <div className="shadow-5-strong w-100 rounded-7 p-2" style={{minheight: '120px'}}>
                <div className="d-flex">
                    <span className="fs-1 rounded-4 px-4 m-2 h-f" style={{backgroundColor: '#F3E5F5',height: 'fit-content'}}>
                        <i className="far fa-credit-card"></i>
                    </span>
                    <div>
                        <h2>Payment Method</h2>
                        <p>Bank Transfer</p>
                    </div>
                </div>
            </div>
            <div className="shadow-5-strong rounded-7 mt-4 p-2" style={{minheight: '150px'}}>
                <div className="d-flex">
                    <span className="fs-1 rounded-4 px-4 m-2" style={{backgroundColor: '#F3E5F5',height: 'fit-content'}}>
                        <i className="fas fa-location-dot"></i>
                    </span>
                    <div>
                        <h2>Delivery Address</h2>
                        <p>Your Home Address</p>
                    </div>
                </div>
                <div>
                    <span className="d-block">Satulj Appt, Gomti Nagar Extension</span>
                    <span>Lucknow - 226010</span>
                </div>
            </div>
        </div>
      </div>

</section>
    </div>
  )
}
