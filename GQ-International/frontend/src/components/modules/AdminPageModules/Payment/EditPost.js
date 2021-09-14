import React, {Component} from 'react';
import axios from "axios";

class EditPost extends Component {


    constructor(props) {
        super(props);
        this.state={
            FullName:"",
            Address:"",
            Email:"",
            Phone:""
        }
    }

    handleInputChange =(e) =>{
        const {name,value}=e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit =(e) =>{


        e.preventDefault();
        const id = this.props.match.params.id;
        const {FullName,Address,Email,Phone} = this.state;

        const data = {
            FullName:FullName,
            Address:Address,
            Email:Email,
            Phone:Phone
        }

        console.log(data)
        axios.put(`/post/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Post Updadted Sucessfully")
                this.setState(
                    {
                        FullName:"",
                        Address:"",
                        Email:"",
                        Phone:""
                    }
                )
            }
        })
    }


    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res)=>{
            if (res.data.success){
                this.setState({
                    FullName:res.data.post.FullName,
                    Address:res.data.post.Address,
                    Email:res.data.post.Email,
                    Phone:res.data.post.Phone

                });

                console.log(this.state.post);
            }
        });
    }


    render() {
        return (
            <div className='col-md-8 mt-4 mx-auto'>
                <h1 className='h3 mb-3 font-weight-normal'>Edit Employee</h1>
                <form className='needs-validation' noValidate>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Full Name</label>
                        <input type='text'
                               className='form-control'
                               name='FullName'
                               placeholder='Enter Employee Name '
                               value={this.state.FullName}
                               onChange={this.handleInputChange}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address</label>
                        <input type='text'
                               className='form-control'
                               name='Address'
                               placeholder='Enter Employee Address '
                               value={this.state.Address}
                               onChange={this.handleInputChange}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type='text'
                               className='form-control'
                               name='Email'
                               placeholder='Enter Employee Email '
                               value={this.state.Email}
                               onChange={this.handleInputChange}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Phone</label>
                        <input type='text'
                               className='form-control'
                               name='Phone'
                               placeholder='Enter Employee Phone '
                               value={this.state.Phone}
                               onChange={this.handleInputChange}/>
                    </div>

                    <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className='far fa-check-square'>
                            &nbsp; Update
                        </i>
                    </button>
                </form>


            </div>
        );
    }
}

export default EditPost;