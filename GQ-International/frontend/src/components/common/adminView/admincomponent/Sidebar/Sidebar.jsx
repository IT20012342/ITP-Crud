import "./Sidebar.css"
import {LineStyle,Payment,ViewList,PeopleAlt,SupervisedUserCircle,PeopleAltOutlined,SupervisorAccountRounded,BarChart,ShowChart} from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                        <ul className="sidebarList"><br/>
                            <li className="sidebarListItem " >
                                 <LineStyle className="sidebarIcon"/>  <a  style={{textDecoration:'none',color:'white'}} href="/"> OVERVIEW</a>
                            </li><br/>
                            <li className="sidebarListItem"> 
                                 <Payment className="sidebarIcon"/> <a style={{textDecoration:'none',color:'white'}} href="/payments"> Payment</a>
                            </li><br/>
                            <li className="sidebarListItem">  
                                 <ViewList className="sidebarIcon"/>  <a  style={{textDecoration:'none',color:'white'}} href="/orders"> ORDERS</a>
                            </li><br/>
                            <li className="sidebarListItem">
                                 <PeopleAltOutlined className="sidebarIcon"/> <a  style={{textDecoration:'none',color:'white'}} href="/allEmp"> EMPLOYEE</a>
                            </li><br/>
                            <li className="sidebarListItem">
                                 <SupervisorAccountRounded className="sidebarIcon"/>  SUPPLIERS
                            </li><br/>
                            <li className="sidebarListItem">
                                 <PeopleAlt className="sidebarIcon"/>  CUSTOMERS
                            </li><br/>
                            <li className="sidebarListItem">
                                 <SupervisedUserCircle className="sidebarIcon"/>  CLIENT RELATION
                            </li><br/>
                            <li className="sidebarListItem">
                                 <BarChart className="sidebarIcon"/>   EXPENSES
                            </li><br/>
                            <li className="sidebarListItem">
                                 <ShowChart className="sidebarIcon"/> <a href="/Stock" style={{textDecoration:'none',color:'white'}}> STOCKS</a>
                            </li><br/>
                          
                        </ul>

                </div>
            </div>
           
        </div>
    )
}
