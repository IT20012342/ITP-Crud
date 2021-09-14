import React, {Component} from 'react';
import axios from "axios";

class SalaryDeatils extends Component {

    constructor(props){
        super(props);

        this.state={
            esal:{}
        };
    }
    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/esal/${id}`).then((res)=>{
            if (res.data.success){
                this.setState({
                    esal:res.data.esal
                });

                console.log(this.state.esal);
            }
        });
    }
    render() {

        const {FullName,Date,Work_Hours,Hourly_Rate,Total_Amount} = this.state.esal;

        return (
            <div className="card" style={{marginTop:'20px', alignItems:'center',width:'100%',height:'100%',display:'flex'}}>
            <div style={{marginTop:'20px',marginLeft:'50px', marginRight:'200px'}}>&nbsp;&nbsp;&nbsp;
                <h4 style={{color:'blue', marginRight:'100px'}}>{FullName}</h4>
                <hr/>

                <dl className='row'>
                    <dt className='col-sm-3'>Date</dt>
                    <dd className='col-sm-9'>{Date}</dd>
                    <hr/>
                    <dt className='col-sm-3'>Work_Hours</dt>
                    <dd className='col-sm-9'>{Work_Hours}</dd>
                    <hr/>
                    <dt className='col-sm-3'>Hourly_Rate</dt>
                    <dd className='col-sm-9'>{Hourly_Rate}</dd>
                    <hr/>
                    <dt className='col-sm-3'>Total_Amount</dt>
                    <dd className='col-sm-9'>{Total_Amount}</dd>
                </dl>




            </div>
            <button className='btn-grad' style={{margin:'20px',marginLeft:'400px',float:'right'}}> <a href='/viewSalary' style={{textDecoration:'none',textAlign:'center',color:'white'}}> Back To Dashboard</a></button>
        </div>


        );
    }
}

export default SalaryDeatils;