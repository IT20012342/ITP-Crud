import React,{Component} from 'react';
import axios from 'axios';



export default class MainCR extends Component{

    constructor(props){
        super(props);

        this.state={
            posts:[]
        };
    }

    componentDidMount(){
        this.retrieveDebtors();
    }

    retrieveDebtors(){
        axios.get("/postsd").then(res =>{
            if(res.data.success){
                this.setState({
                    posts:res.data.existingDebtor
                });
                console.log(this.state.posts);
            }
        });
    }

    filterData(posts,searchKey){
        const result = posts.filter((post)=>
        post.name.toLowerCase().includes(searchKey)||
        post.contact.includes(searchKey)||
        post._id.toLowerCase().includes(searchKey)
        )
        this.setState({posts:result})

    }

    handleSearchArea = (e)=>{
       const searchKey = e.currentTarget.value;

       axios.get("/postsd").then(res =>{
        if(res.data.success){
            this.filterData(res.data.existingDebtor, searchKey)
            
        }
    });


    } 

    onDelete = (id) =>{
        axios.delete(`/postd/delete/${id}`).then((res)=>{
            alert("Deleted");
            this.retrieveDebtors();
        })

    }

    render(){

        return(
            <div style={{paddingBottom:'10px', paddingTop:'10px', marginLeft:'10px'}}>
                <div className="col-lg-9 mt-2 mb-2">
                <h4>All Debtors</h4>
                </div>
                <div className="col-lg-3 mt-2 mb-2">
                    <input className="form-control"
                            type="search"
                            placeholder="Search"
                            name="searchQuery"
                            onChange={this.handleSearchArea}></input>

                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Address</th>
                            <th scope="col">Guarantor</th>
                            <th scope="col">Credit Limit</th>
                            <th scope="col">Remarks</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map((posts,index)=>(
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>
                                {posts._id}
                                </td>
                            <td>{posts.name}</td>
                            <td>{posts.contact}</td>
                            <td>{posts.address}</td>
                            <td>{posts.guarantor}</td>
                            <td>{posts.creditLimit}</td>
                            <td>{posts.remarks}</td>
                            <td>
                                <a href={`/editDebt/${posts._id}`} className="btn btn-warning">
                                    <i className="fas fa-edit"></i>
                                    </a>
                                &nbsp;
                                <button type="button" className="btn btn-danger" href="/" onClick={()=>this.onDelete(posts._id)}>
                                    <i className="far fa-trash-alt"></i>&nbsp;
                                </button>


                            </td>
                        </tr>

                    ))}
                    </tbody>
                    </table>

                    <button className="btn btn-success">
                        <a href="/addDebt" style={{color:'white', textDecoration:'none'}}>Add New Debtor</a>
                    </button>
                    
                </div>
        )
    }

}