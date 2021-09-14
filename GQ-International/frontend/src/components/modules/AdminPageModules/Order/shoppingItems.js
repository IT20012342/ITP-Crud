import React, { Component } from 'react'
import axios from 'axios'

export default class shoppingItems extends Component {


    constructor(props){
        super(props);
    
        this.state={
            productShopping:[]
        }
      }
    
      
    componentDidMount(){
        axios.get("http://localhost:8000/shopping").then(res =>{
            if(res.data.success){
                this.setState({
                    productShopping:res.data.existingPosts
                });
      
                console.log(this.state.productShopping)
            }
        });
    }


    onDelete = (id) =>{
      axios.delete(`http://localhost:8000/cartpost/delete/${id}`).them((res) =>{
        this.retrevePosts();
        alert("Deleted successfuly")
      })
    }
  


    render() {

        const {name, price, qty, total} = this.state.productShopping

        return (
          <div className="card" style={{borderRadius:'30px',marginTop:'10px',width:'100%',alignItems:'center'}}>
       <center>      
      <div >
        <center><h2 style={{marginBottom:'10px'}}>shopping orders</h2></center>
        
      {/*<div className="col-lg-3 mt-2 mb-2">
        <input
        className="form-control"
        type="text"
        placeholder="Search"
        name="searchQuery"
        onChange={this.handleSearchArea}/>
        </div>*/}

      <table className="table">

      <thead>

        <tr>
          <th scop="col1">#</th>
         {/* <th scop="col1">Item ID</th> */}
          <th scop="col1">Name</th>
          <th scop="col1">Price</th>
          <th scop="col1">Quantity</th>
          <th scop="col1">Total</th>
        </tr>
      </thead>

      <tbody>
        {this.state.productShopping.map((posts,index) =>(

          <tr key={index}>
            <th scope="row">{index+1}</th>
           
            
           {/* <td>{posts.item_id}</td> */}
            <td>{posts.name}</td>
            <td>{posts.price}</td>
            <td>{posts.qty}</td>
            <td>{posts.qty*posts.price}</td>
           <td>
              <a className = "btn btn-warning" href={`/cartedit/${posts._id}`}>
                <i className="fas fa-edit"></i> &nbsp;Edit
              </a>
                &nbsp;
              <a className = "btn btn-danger" href="" onClick={() =>this.onDelete(posts._id)}>
                <i className="fas fa-trash-alt"></i> &nbsp;Delete
              </a>
           </td> 
        </tr>

        ))}
      </tbody>

      </table>

      </div>
      <div><button className="btn btn-success"><a href='/orders' style={{textDecoration:'none', color:'white'}}>Back to table</a></button></div>
      </center>   
            </div>
        )
    }
}
