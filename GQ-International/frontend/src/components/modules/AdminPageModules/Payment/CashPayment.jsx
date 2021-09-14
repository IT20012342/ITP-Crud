import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import './CashPayments.css';

class CashPayment extends Component{

    constructor(props){
        super(props);
        this.state={
            date:"",
            cusName:"",
            contactNo:"",
            address:"",
            email:"",
            itemCode:"",
            qty:"",
            description:"",
            unitPrice:"",
            price:"",
            subTot:'',
            discount:"",
            totalAmount:"",

            error:{}
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleTotal = this.handleTotal.bind(this);
    }

    componentWillMount(){}

    handlePrice =(e) =>{
        this.setState(
            {
                price:e.target.value
            });
    }

    handleTotal =(e) =>{
        this.setState(
            {
                totalAmount:e.target.value
            });
    }

    handleInputChange =(e) =>{
        const {name,value}=e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }


    formValidation = () =>{
        const{date,cusName,contactNo,address,email,itemCode,qty,description,unitPrice,price,discount,totalAmount}=this.state;
        let isValid = true;
        const error = {};
    
        if(!date){
          error["dateEmpty"] = "This field cannot be empty!";
          isValid=false;
        }
    
        if(!cusName){
          error["cusNameEmpty"] = "This field cannot be empty!";
          isValid=false;
        }
    
        if(!contactNo){
          error["contactNoEmpty"] = "This field cannot be empty!";
          isValid=false;
        }
    
        if(!address){
          error["addressEmpty"] = "This field cannot be empty!";
          isValid=false;
        }

        if(!email){
            error["emailEmpty"] = "This field cannot be empty!";
            isValid=false;
          }
      
          if(!itemCode){
            error["itemCodeEmpty"] = "This field cannot be empty!";
            isValid=false;
          }
      
          if(!qty){
            error["qtyEmpty"] = "This field cannot be empty!";
            isValid=false;
          }
      
          if(!description){
            error["descriptionEmpty"] = "This field cannot be empty!";
            isValid=false;
          }

          if(!unitPrice){
            error["unitPriceEmpty"] = "This field cannot be empty!";
            isValid=false;
          }
      
          if(!price){
            error["priceEmpty"] = "This field cannot be empty!";
            isValid=false;
          }
      
          if(!discount){
            error["discountEmpty"] = "This field cannot be empty!";
            isValid=false;
          }
      
          if(!totalAmount){
            error["totalAmountEmpty"] = "This field cannot be empty!";
            isValid=false;
          }
    
        this.setState({error:error});
            return isValid;
      }
    

    onSubmit(e){
        e.preventDefault();

        const isValid = this.formValidation();
        if(isValid){

        let date = this.state.date;
        let cusName = this.state.cusName;
        let contactNo = this.state.contactNo;
        let address = this.state.address;
        let email = this.state.email;
        let itemCode = this.state.itemCode;
        let qty = this.state.qty;
        let description = this.state.description;
        let unitPrice = this.state.unitPrice;
        let price = qty * unitPrice;
        let discount = this.state.discount;
        let totalAmount = (qty * unitPrice) - discount;

        console.log(date,cusName,contactNo,address,email,itemCode,qty,description,unitPrice,price,discount,totalAmount);

        const self = this;

        axios.post("/cashPay/save",{
            date:date,
            cusName:cusName,
            contactNo:contactNo,
            address:address,
            email:email,
            itemCode:itemCode,
            qty:qty,
            description:description,
            unitPrice:unitPrice,
            price:price,
            discount:discount,
            totalAmount:totalAmount
   
        }).then(function(response){
            alert("Cash Payment Added!");
            console.log(response);
            self.setState({
                date: '', 
                cusName: '', 
                contactNo: '',
                address:'',
                email:'',
                itemCode:'',
                qty:'',
                description:'',
                unitPrice:'',
                price:'',
                discount:'',
                Total_Amount:''
            });
        }).catch(function(error){
            console.log(error.response.data);
        });
    }
    }

      render(){
        const{error}=this.state;
          return(
                <div>
                   <div style={{width:"100%"}}>
                    <Form>
                    <div>
                        <div class="page-header text-blue-d2">
                            <h1 class="page-title text-secondary-d1">
                                Invoice
                                <small class="page-info">
                                    <i class="fa fa-angle-double-right text-80"></i>
                                    No: #0001
                                </small>
                            </h1>

                            <div class="page-tools">
                                <div class="action-buttons">
                                    <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="Print">
                                        <i class="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
                                        Print
                                    </a>
                                    <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="PDF">
                                        <i class="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
                                        Export
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="row mt-4">
                                <div class="col-12 col-lg-10 offset-lg-1">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="text-center text-150">
                                                <span class="text-default-d3">GQ International</span>
                                            </div>
                                        </div>
                                    </div>
                                

                                    <hr class="row brc-default-l1 mx-n1 mb-4" />

                                    <div class="row">
                                        <div class="col-sm-6">
                                            <Form.Group as={Row} >
                                            <Form.Label column sm={5}>Customer Name : </Form.Label>
                                            <Col sm={5}>
                                            <input type='text'
                                                className='form-control'
                                                name='cusName'
                                                value={this.state.cusName}
                                                onChange={this.handleInputChange}/>
                                                <div className="text-danger">{this.state.error.cusNameEmpty}</div>
                                            </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} >
                                            <Form.Label column sm={5}>Contact Number : </Form.Label>
                                            <Col sm={5}>
                                            <input type='text'
                                                    className='form-control'
                                                    name='contactNo'
                                                    value={this.state.contactNo}
                                                    onChange={this.handleInputChange}/>
                                                    <div className="text-danger">{this.state.error.contactNoEmpty}</div>
                                            </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} >
                                            <Form.Label column sm={5}>Address : </Form.Label>
                                            <Col sm={5}>
                                            <input type='text'
                                                    className='form-control'
                                                    name='address'
                                                    value={this.state.address}
                                                    onChange={this.handleInputChange}/>
                                                     <div className="text-danger">{this.state.error.addressEmpty}</div>
                                            </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} >
                                            <Form.Label column sm={5}>email : </Form.Label>
                                            <Col sm={5}>
                                            <input type='text'
                                                    className='form-control'
                                                    name='email'
                                                    value={this.state.email}
                                                    onChange={this.handleInputChange}/>
                                                    <div className="text-danger">{this.state.error.emailEmpty}</div>
                                            </Col>
                                            </Form.Group>
                                        </div>
                                    

                                        <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                                            <hr class="d-sm-none" />
                                            <div class="text-grey-m2">
                                                <div class="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                                                    Invoice
                                                </div>

                                                <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">No:</span> #0001</div>

                                                <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Issue Date:</span> 
                                                <input type='date'
                                                    className='form-control'
                                                    name='date'
                                                    value={this.state.date}
                                                    onChange={this.handleInputChange}/>
                                                    <div className="text-danger">{this.state.error.dateEmpty}</div>
                                                </div>

                                            </div>
                                        </div>
                                    
                                    </div>

                                    <div class="mt-4">
                                        
                                    <div class="row text-600 text-white bgc-default-tp1 py-25">
                                            <div class="d-none d-sm-block col-1">#</div>
                                            <div class="col-9 col-sm-3">Item Code</div>
                                            <div class="d-none d-sm-block col-4 col-sm-1">Qty</div>
                                            <div class="d-none d-sm-block col-sm-3">Description</div>
                                            <div class="d-none d-sm-block col-sm-2">Unit Price</div>
                                            <div class="col-2">Amount</div>
                                        </div>

                                        <div class="text-95 text-secondary-d3">
                                            <div class="row mb-2 mb-sm-0 py-25">

                                                <div class="d-none d-sm-block col-1">1</div>
                                            
                                                <div class="col-9 col-sm-3">
                                                <input type='text'
                                                        className='form-control'
                                                        name='itemCode'
                                                        value={this.state.itemCode}
                                                        onChange={this.handleInputChange}/>
                                                        <div className="text-danger">{this.state.error.itemCodeEmpty}</div>
                                                </div>

                                                <div class="d-none d-sm-block col-4 col-sm-1">
                                                <input type='number'
                                                        className='form-control'
                                                        name='qty'
                                                        value={this.state.qty}
                                                        onChange={this.handleInputChange}/>

                                                </div>

                                                <div class="d-none d-sm-block col-sm-3">
                                                    <input type='text'
                                                        className='form-control'
                                                        name='description'
                                                        value={this.state.description}
                                                        onChange={this.handleInputChange}/>
                                                        <div className="text-danger">{this.state.error.descriptionEmpty}</div>
                                                </div>

                                                <div class="d-none d-sm-block col-sm-2">
                                                <input type='text'
                                                        className='form-control'
                                                        name='unitPrice'
                                                        value={this.state.unitPrice}
                                                        onChange={this.handleInputChange}/>
                                                        <div className="text-danger">{this.state.error.unitPriceEmpty}</div>
                                                </div>

                                                <div class="col-2">
                                                    <input type='text'
                                                        className='form-control'
                                                        name='price'
                                                        value={(this.state.qty)*(this.state.unitPrice)}
                                                        onChange={this.handlePrice}/>
                                                </div>
                                            </div>

                                            
                                            
                                        
                                        </div>

                                        <div class="row border-b-2 brc-default-l2"></div>

                                    

                                        <div class="row mt-3">
                                            <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0"></div>

                                            <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                                                <div class="row my-2">
                                                    <div class="col-7 text-right">
                                                        SubTotal
                                                    </div>
                                                    <div class="col-5">
                                                        <span class="text-120 text-secondary-d1">
                                                            <input type='text'
                                                                className='form-control'
                                                                name='subprice'
                                                                value={(this.state.qty)*(this.state.unitPrice)}
                                                                onChange={this.handleInputChange}/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div class="row my-2">
                                                    <div class="col-7 text-right">
                                                        Discount
                                                    </div>
                                                    <div class="col-5">
                                                        <span class="text-110 text-secondary-d1">
                                                        <input type='text'
                                                            className='form-control'
                                                            name='discount'
                                                            value={this.state.discount}
                                                            onChange={this.handleInputChange}/>
                                                            <div className="text-danger">{this.state.error.discountEmpty}</div>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div class="row my-1 align-items-center bgc-primary-l3 p-1">
                                                    <div class="col-7 text-right">
                                                        <b>Total Amount</b>
                                                    </div>
                                                    <div class="col-5">
                                                        <span class="text-150 text-success-d3 opacity-2">
                                                        <input type='text'
                                                            className='form-control'
                                                            name='totAmount'
                                                            value={((this.state.qty)*(this.state.unitPrice))-(this.state.discount)}
                                                            onChange={this.handleTotal}/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />

                                        <div>
                                            <span class="text-secondary-d1 text-105">Thank you for your business</span>
                                            <a href="#" class="btn btn-outline px-4 float-right mt-3 mt-lg-0" style={{backgroundColor:"#AF2626", color:"white",float:"right"}} onClick={this.onSubmit} >Add Payment</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Form>
                    </div>
                </div>
          );
      }
}

export default CashPayment;