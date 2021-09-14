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
        axios.get("/onlinePay").then(res =>{
            if(res.data.success){
                this.setState({posts:res.data.existingOnline});
                console.log(this.state.posts);
            }
        });
    }

    onDelete = (id) =>{
        axios.delete(`/onlinePay/delete/${id}`).then((res)=>{
            alert("Deleted Successfully");
            this.retrieveposts();
        })
    }

    filterData(posts,searchKey){
        const result = posts.filter((post) =>
            post.orderID.toLowerCase().includes(searchKey)||
            post.cusID.toLowerCase().includes(searchKey))

        this.setState({posts:result})
    }

    handleSearchArea =(e) =>{
        const searchKey =   e.currentTarget.value;
          axios.get("/onlinePay").then(res =>{
              if(res.data.success){
                  this.filterData(res.data.existingOnline,searchKey)
              }
          });
  
      }

   render (){
    return (

            <div style={{margin:"40px"}}>
                <div className='row'>
                    <div className='col-lg-9 mt-2 mb-2'>
                        <h3>Online Payments</h3>
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
                        <th scope="col">Order Number</th>
                        <th scope="col">Customer ID</th>
                        <th scope="col">Item Code</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.state.posts.map((posts,index) =>(

                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>
                               <a href={`/onlinePay/${posts._id}`} style={{ textDecoration:'none'}}>
                                    {posts._id}
                               </a>
                            </td>
                            <td>{posts.date}</td>
                            <td>{posts.orderID}</td>
                            <td>{posts.cusID}</td>
                            <td>{posts.productCode}</td>
                            <td>{posts.amount}</td>

                            <td>
                                <a className="btn btn-light" href={`/UpdateOnlinePay/${posts._id}`}>
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
