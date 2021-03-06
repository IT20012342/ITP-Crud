import "./Chart.css"
//import { LineChart, Line, XAxis,  CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

import React, {Component} from 'react';
import axios from 'axios';

export default class Chart extends Component {

    constructor(props) {
        super(props);

        this.state={
            posts:[]
        };
    }

    componentDidMount() {
        this.retrieveposts();
    }

    retrieveposts(){
        axios.get("/cashPay").then(res =>{
            if(res.data.success){
                this.setState({posts:res.data.existingCash});
                console.log(this.state.posts);
            }
        });
    }

    onDelete = (id) =>{
        axios.delete(`/cashPay/delete/${id}`).then((res)=>{
            alert("Deleted Successfully");
            this.retrieveposts();
        })
    }

    filterData(posts,searchKey){
        const result = posts.filter((post) =>
            post.cusName.toLowerCase().includes(searchKey)||
            post._id.toLowerCase().includes(searchKey))

        this.setState({posts:result})
    }

    handleSearchArea =(e) =>{
        const searchKey =   e.currentTarget.value;
          axios.get("/cashPay").then(res =>{
              if(res.data.success){
                  this.filterData(res.data.existingCash,searchKey)
              }
          });
  
      }

   render (){
    return (

            <div style={{margin:"40px"}}>
                <div className='row'>
                    
                <div><button className="btn btn-success" size="lg"> <a href='/CashPayment' style={{textDecoration:'none',color:'white', paddingTop:'20px', paddingBottom:'20px' }}>Add Cash Payment</a></button></div>
                    <div className='col-lg-9 mt-2 mb-2'>
                        
                        <h3>Cash Payments</h3>
                    </div>
                    <div className='col-lg-3 mt-2 mb-2'>
                        <input className='form-control'
                               type='search'
                               placeholder='Search'
                               name='SearchQuery'
                               onChange={this.handleSearchArea}>
                        </input>
                    </div>
                </div>



                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Final Amount</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.state.posts.map((posts,index) =>(

                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>
                               <a href={`/cashPay/${posts._id}`} style={{ textDecoration:'none'}}>
                                    {posts._id}
                               </a>
                            </td>
                            <td>{posts.date}</td>
                            <td>{posts.cusName}</td>
                            <td>{posts.discount}</td>
                            <td>{posts.totalAmount}</td>

                            <td>
                                <a className="btn btn-light" href={`/UpdateCashPay/${posts._id}`}>
                                    <i className="fas fa-edit"/>
                                </a>
                                &nbsp;
                                <a className="btn btn-light" href="#" onClick={()=> this.onDelete(posts._id)}>
                                    <i className="far fa-trash-alt"/>
                                </a>
                            </td>
                        </tr>

                    ))}
                    </tbody>
                </table>

                
            </div>

            

        );
    }
    
}
