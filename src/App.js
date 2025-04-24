
import React from 'react';


import { lazy,Suspense } from 'react';

import AdvertPage from './components/AdvertPage';
import SingleTrip from './components/single-trip';
import MyBookings from './components/MyBookings';
import Signin from './components/Signin';
import Signup from './components/Signup';
import {Routes,Route} from "react-router-dom"
import AppLayout from './components/AppLayout';
import BookTickets from './components/BookTickets';
import BookingHistory from './components/BookingHistory';
import BusTracking from './components/BusTracking';
import Notifications from "./components/Notifications"
const Layout=lazy(()=>import("./components/Layout"))
function App() {

function closeMenu() {
    document.querySelector(".sidebar").classList.remove("open")
}
  return <Routes>
    <Route path='/signin' element={ <Signin/>}/>
    <Route path='/signup' element={ <Signup/>}/>
    <Route path='/' element={<AppLayout/>}>
      <Route index element={<AdvertPage/>}/>
      <Route path='/book-tickets' element={<BookTickets/>}/>
      <Route path='/single-trip/:id' element={  <SingleTrip/>}/>
    <Route path='/bookings' element={  <MyBookings/>}/>
    <Route path='/booking-history' element={  <BookingHistory/>}/>
    <Route path='/bus-tracking' element={  <BusTracking/>}/>
    <Route path='/notifications' element={  <Notifications/>}/>
    
    </Route>
  
   
   

 

   
     
   
   
          
   
   
              {
               /**
                * <AdvertPage/>
                *  <Heading heading="Book a bus with ease online" />
                */
              }
   
            
           
   
    
  </Routes>
 

}

export default App;

{
  /**  <Routes>
    <Route path='/developer-register' element={ <DeveloperRegister/>}/> 
    <Route path='/developer-signin' element={ <DeveloperSignin/>}/> 
    <Route path='/manager-signin' element={ <ManagerSignin/>}/> 
    <Route path='/admin-signin' element={ <AdminSignin/>}/> 
    <Route path='/cashier-signin' element={  <CashierSignin/>}/> 
    <Route path='/home'  element={<AppLayout data={data}/>} >
    <Route path='/home/products'  element={<Products userData={userData}/>} />
    <Route path='/home/users/register-manager'  element={<ManagerRegister userData={userData}/>} />
    <Route path='/home/users/managers'  element={<Managers userData={userData}/>} />
    <Route path='/home/users/admins'  element={<Admins userData={userData}/>} />
    <Route path='/home/users/cashiers'  element={<Cashiers userData={userData}/>} />
    <Route path='/home/users/add-cashier'  element={<CashierRegister userData={userData}/>} />
    <Route path='/home/users/update-cashier/:id'  element={<UpdateCashier userData={userData}/>} />
    <Route path='/home/users/admin/:id'  element={<Admin userData={userData}/>} />
    <Route path='/home/users/register-admin'  element={<AdminRegister userData={userData}/>} />
    <Route path='/home/users/manager/:id'  element={<Manager userData={userData}/>} />
    <Route path='/home/users/manager/update/:id'  element={<UpdateManager userData={userData}/>} />
    <Route path='/home/users/admin/update/:id'  element={<UpdateAdmin userData={userData}/>} />
    <Route path='/home/products/add-product'  element={<AddProduct userData={userData}/>} />
    <Route path='/home/product/:id'  element={<Product userData={userData}/>} />
    <Route path='/home/products/update-product/:id'  element={<UpdateProduct userData={userData}/>} />
    <Route path='/home/banks'  element={<Banks userData={userData}/>} />
    <Route path='/home/banks/add-bank'  element={<AddBank userData={userData}/>} />
    <Route path='/home/banks/update-bank/:id'  element={<UpdateBank userData={userData}/>} />
    <Route path='/home/quotations'  element={<Quotations userData={userData}/>} />
    <Route path='/home/invoices'  element={<Invoices userData={userData}/>} />
    <Route path='/home/pos'  element={<PurchaseOrders userData={userData}/>} />
    <Route path='/home/expenses'  element={<Expenses userData={userData}/>} />
    <Route path='/home/expense/:id'  element={<Expense userData={userData}/>} />
    <Route path='/home/quotations/create-quotation'  element={<CreateQuotation userData={userData}/>} />
    <Route path='/home/purchase-order/create-po'  element={<CreatePo userData={userData}/>} />
    <Route path='/home/expense/create-expense'  element={<CreateExpense userData={userData}/>} />
    <Route path='/home/purchase-order/get-po/:id'  element={<PoTemplate userData={userData}/>} />
    <Route path='/home/template/:id'  element={<Template userData={userData}/>} />
    <Route path='/home/invoice-template/:id'  element={<InvoiceTemplate userData={userData}/>} />
    <Route path='/home/cashier-page'  element={<CashierPage userData={userData}/>} />
 
    <Route index element={<Dashboard   userData={userData}/>}/> 
    </Route>

    <Route path='/template/:id'  element={<Template userData={userData}/>} />
    <Route path='*' element={<NotFoundPage to="/" replace/>}/>
   </Routes> */
}