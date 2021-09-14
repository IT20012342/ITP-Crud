import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {

  constructor(props){
    super(props);

    this.state={
      posts:[]
    }
  }

  componentDidMount(){
    this.retrevePosts();
  }

  retrevePosts(){
    axios.get("http://localhost:8000/posts").then(res =>{
      if(res.data.success){
          this.setState({
            posts:res.data.existingPosts
          });

          console.log(this.state.posts)
      }
  });

}




onDelete = (id) =>{
  axios.delete(`http://localhost:8000/post/delete/${id}`).them((res) =>{
    this.retrevePosts();
    alert("Deleted successfuly")
  })
}

filterData(posts,searchKey){
  const result = posts.filter((post) =>
  post.order_id.toLowerCase().includes(searchKey) || post.cus_id.toLowerCase().includes(searchKey) || post.item_id.toLowerCase().includes(searchKey)
  )
  this.setState({posts:result})
}

handleSearchArea= (e) =>{
  const searchKey = e.currentTarget.value

  axios.get("http://localhost:8000/posts").then(res =>{
      if(res.data.success){
            this.filterData(res.data.existingPosts, searchKey)
          }
        })
      }


      

  render() {
    return (
      <div style={{margin:'40px'}}>


      <div>
        <center><h2>Admin Orders</h2></center>
        
      <div className="col-lg-3 mt-2 mb-2">
        <input
        className="form-control"
        type="text"
        placeholder="Search"
        name="searchQuery"
        onChange={this.handleSearchArea}/>
      </div>

      <table className="table">

      <thead>

        <tr>
          <th scop="col1">#</th>
          <th scop="col1">Order ID</th>
          <th scop="col1">Cus ID</th>
          <th scop="col1">Item ID</th>
          <th scop="col1">Date</th>
          <th scop="col1">Status</th>
          <th scop="col1">Amount</th>
          <th scop="col1">Total</th>
          <th scop="col1">Action</th>
        </tr>
      </thead>

      <tbody>
        {this.state.posts.map((posts,index) =>(

          <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>
                <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                {posts.order_id}
                </a>
            </td>
            <td>{posts.cus_id}</td>
            <td>{posts.item_id}</td>
            <td>{posts.date}</td>
            <td>{posts.status}</td>
            <td>{posts.amount}</td>
            <td>{posts.total}</td>
            <td>
              <a className = "btn btn-warning" href={`/orderEdit/${posts._id}`}>
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

      <button className="btn btn-success"><a href='/orderadd' style={{textDecoration:'none', color:'white'}}>create new post</a></button>
      &nbsp;
      <button className="btn btn-success"><a href='/shopping' style={{textDecoration:'none', color:'white'}}>Shopping cart Items</a></button>

      </div>


      </div>
    )
  }
}
