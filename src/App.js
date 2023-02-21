import './App.css';
import Home from './pages/index'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserHome from './pages/userhome';
import CompanyHome from './pages/companyhome';
import Upload from './pages/upload';
import UserLogin from './pages/userlogin';
import UserRegister from './pages/userregister';
import CompanyLogin from './pages/companylogin';
import CompanyRegister from './pages/companyregister';
import AddRequest from './pages/addrequest';
import Admin from './pages/admin';
import ViewRequest from './pages/viewrequest';
import ViewRequestDetails from './pages/viewrequestdetails';
import ViewData from './pages/viewdata';
import ViewDataDetails from './pages/viewdatadetails'
import ViewDataDetailsUser from './pages/viewdatadetailsUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/UserHome" element={<UserHome />}></Route>
        <Route path="/CompanyHome" element={<CompanyHome />}></Route>
        <Route path="/Upload" element={<Upload />}></Route>
        <Route path="/UserLogin" element={<UserLogin />}></Route>
        <Route path="/UserRegister" element={<UserRegister/>}></Route>
        <Route path="/CompanyLogin" element={<CompanyLogin />}></Route>
        <Route path="/CompanyRegister" element={<CompanyRegister/>}></Route>
        <Route path="/AddRequest" element={<AddRequest />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/ViewRequest" element={<ViewRequest />}></Route>
        <Route path="/ViewRequestDetails" element={<ViewRequestDetails />}></Route>
        <Route path="/ViewData" element={<ViewData />}></Route>
        <Route path="/ViewDataDetails" element={<ViewDataDetails />}></Route>
        <Route path="/ViewDataDetailsUser" element={<ViewDataDetailsUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
