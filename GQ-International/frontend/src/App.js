/*import React from 'react';

//import NavBar from './components/common/customerView/NavBar';
import NavBar from './components/common/adminView/NavBar';
import FooterPage from './components/common/customerView/Footer';
import SlideShow from './components/Pages/SlideShow/SlideShow';
import {BrowserRouter ,  Switch, Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
//import Debtpay from './components/Pages/CR/PayForm';
import Stock from '../../frontend/src/components/modules/AdminPageModules/Stock/stock.js';
import createStock from '../../frontend/src/components/modules/AdminPageModules/Stock/createStock';
import editStocks from '../../frontend/src/components/modules/AdminPageModules/Stock/editStocks';
import stockDetails from '../../frontend/src/components/modules/AdminPageModules/Stock/stockDetails';
//import backDrop from '../../frontend/src/components/common/customerView/backDrop';
//import sideDrawer from '../../frontend/src/components/common/customerView/sideDrawer';
//screens
import ItemHomeScreen from './screens/ItemHomeScreen';
import ItemScreen from './screens/ItemScreen';
//import CartScreen from './screens/CartScreen';
//import Item from './components/modules/AdminPageModules/Stock/createItem';

import Deficit from './components/modules/AdminPageModules/Stock/deficit';
import CreateDeficits from './components/modules/AdminPageModules/Stock/CreateDeficits';
import editDeficits from './components/modules/AdminPageModules/Stock/editDeficits';
import deficitDetails from './components/modules/AdminPageModules/Stock/deficitDetails';
import createItem from './components/modules/AdminPageModules/Stock/createItem';
import editItem from './components/modules/AdminPageModules/Stock/editItem';
import Item from './components/modules/AdminPageModules/Stock/item';
import itemDetails from './components/modules/AdminPageModules/Stock/itemDetails';

function App() {
  
  return (
   
    <BrowserRouter>
        <NavBar/>
        <sideDrawer/>
        <backDrop/>
        
        <Switch>

        
        
          <Route path="/Stock" component={Stock}>
            <Stock/>
          </Route>

            <Route path="/AddStock" component={createStock}>
            
            </Route>

            <Route path="/EditStock/:id" component={editStocks}>
            
            </Route>

            <Route path="/StockDetails/:id" component={stockDetails}>
            
            </Route>
            
            
            <Route exact path="/item" component={ItemHomeScreen}>
            </Route>
              
            <Route path="/AddItem" component={createItem}>
            
            </Route>
            
            <Route path="/EditItem/:id" component={editItem}>
            
            </Route>
            
            <Route path="/viewItem" component={Item}>

            </Route>
            <Route exact path="/item/:id" component={ItemScreen}>
            </Route>

            <Route path="/itemDetails/:id" component={itemDetails}>
            
            </Route>

            <Route path="/Deficit" component={Deficit}>

            </Route>

            <Route path="/AddDeficit" component={CreateDeficits}>
            
            </Route>

            <Route path="/EditDeficit/:id" component={editDeficits}>
            
            </Route>

            <Route path="/DeficitDetails/:id" component={deficitDetails}>
            
            </Route>

        

         
        </Switch>

        


        <FooterPage/>
    </BrowserRouter>
    

   
  );
}

export default App; 

*/

import React from 'react';
import Sidebar from"./components/common/adminView/admincomponent/Sidebar/Sidebar";
import "./appa.css";
import Overview from "./components/Pages/Admin/adminpages/overview/Overview";
import Topbar from './components/common/adminView/admincomponent/topbar/Topbar';
import {BrowserRouter, Route} from "react-router-dom";
import EmpAdd from "./components/Pages/Admin/adminpages/EmployeeDetails/EmpAdd";
//import EmpEdit from "./components/Pages/Admin/adminpages/EmployeeDetails/EmpEdit";
import EditEmployee from "./components/modules/AdminPageModules/Employee/EditEmployee";
import EmployeeDetails from "./components/modules/AdminPageModules/Employee/EmployeeDetails";
import Attendance from "./components/modules/AdminPageModules/Employee/Attendance";
import Salary from "./components/modules/AdminPageModules/Employee/Salary";
import AddAttendance from "./components/modules/AdminPageModules/Employee/AddAttendance";
import EditAttendance from "./components/modules/AdminPageModules/Employee/EditAttendance";
import AddSalary from "./components/modules/AdminPageModules/Employee/AddSalary";
import EditSalary from "./components/modules/AdminPageModules/Employee/EditSalary";
import AttendanceDetails from "./components/modules/AdminPageModules/Employee/AttendanceDetails";
import SalaryDeatils from "./components/modules/AdminPageModules/Employee/SalaryDeatils";
import employeee from "./components/Pages/Admin/adminpages/overview/Employeee";

/* stocks */
import Stock from '../../frontend/src/components/modules/AdminPageModules/Stock/stock.js';
import createStock from '../../frontend/src/components/modules/AdminPageModules/Stock/createStock';
import editStocks from '../../frontend/src/components/modules/AdminPageModules/Stock/editStocks';
import stockDetails from '../../frontend/src/components/modules/AdminPageModules/Stock/stockDetails';
import createItem from './components/modules/AdminPageModules/Stock/createItem';
import editItem from './components/modules/AdminPageModules/Stock/editItem';
import Item from './components/modules/AdminPageModules/Stock/item';
import itemDetails from './components/modules/AdminPageModules/Stock/itemDetails';

/*Deficits */
import Deficit from './components/modules/AdminPageModules/Stock/deficit';
import CreateDeficits from './components/modules/AdminPageModules/Stock/CreateDeficits';
import editDeficits from './components/modules/AdminPageModules/Stock/editDeficits';
import deficitDetails from './components/modules/AdminPageModules/Stock/deficitDetails';

/*order*/
import OrderHome from "./components/modules/AdminPageModules/Order/Home"
import CreatePost from "./components/modules/AdminPageModules/Order/CreatePost"
import EditPost from "./components/modules/AdminPageModules/Order/EditPost"
import PostDetails from "./components/modules/AdminPageModules/Order/PostDetails"
import Shopping from "./components/modules/AdminPageModules/Order/shoppingItems"
import EditCart from "./components/modules/AdminPageModules/Order/editCartOrder"

function App() {

    return (
        <BrowserRouter>
        <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>

                <Route path="/" exact component ={Overview}/>
                <Route path="/allEmp" exact component={employeee}/>
                <Route path="/add" exact component ={EmpAdd}/>
                <Route path="/edit/:id"  component ={EditEmployee}/>
                <Route path="/employee/:id"  component ={EmployeeDetails}/>
                <Route path="/viewAttendance" component={Attendance}/>
                <Route path="/viewSalary" component={Salary}/>
                <Route path="/addAttendance" component={AddAttendance}/>
                <Route path="/editAttendance/:id" component={EditAttendance}/>
                <Route path="/addSalary" component={AddSalary}/>
                <Route path="/editSalary/:id" component={EditSalary}/>
                <Route path="/attendance/:id" component={AttendanceDetails}/>
                <Route path="/esal/:id" component={SalaryDeatils}/>

                {/**Stocks */}
                <Route path="/Stock" exact component={Stock}/>
                <Route path="/AddStock" component={createStock}/>
                <Route path="/EditStock/:id" component={editStocks}/>
                <Route path="/StockDetails/:id" component={stockDetails}/>
                <Route path="/AddItem" component={createItem}/>
                <Route path="/EditItem/:id" component={editItem}/>
                <Route path="/viewItem" component={Item}/>
                <Route path="/itemDetails/:id" component={itemDetails}/>

                {/*Deficits */}
                <Route path="/Deficit" component={Deficit}/>
                <Route path="/AddDeficit" component={CreateDeficits}/>
                <Route path="/EditDeficit/:id" component={editDeficits}/>
                <Route path="/DeficitDetails/:id" component={deficitDetails}/>
              
			   {/*Order*/}
			          <Route path="/orders" exact component={OrderHome}></Route>
			          <Route path="/orderadd" exact component={CreatePost}></Route>
                <Route path="/shopping" exact component={Shopping}></Route>
                <Route path="/orderEdit/:id" exact component={EditPost}></Route>
			          <Route path="/post/:id" exact component={PostDetails}></Route>
                <Route path="/cartedit/:id" exact component={EditCart}></Route>
			  

            </div>
        </div>
    </BrowserRouter>
    );
}


export default App;


