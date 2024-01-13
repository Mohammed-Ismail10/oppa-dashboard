// import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Customers from './components/Customers/Customers.jsx';
import Otp from './components/Otp/Otp.jsx';
import AllFolders from './components/AllFolders/AllFolders.jsx';
import Coins from './components/Coins/Coins.jsx';
import Countries from './components/Countries/Countries.jsx';
import RoomCategories from './components/RoomCategories/RoomCategories.jsx';
import Target from './components/Target/Target.jsx';
import UserSetting from './components/UserSetting/UserSetting.jsx';
import Items from './components/Items/Items.jsx';
import Vip from './components/Vip/Vip.jsx';
import Pages from './components/Pages/Pages.jsx';
import Notifications from './components/Notifications/Notifications.jsx';
import TableItems from './components/Items/TableItems.jsx';
import TableVip from './components/Vip/TableVip.jsx';
import AddItems from './components/Items/AddItems.jsx';
import AddVip from './components/Vip/AddVip.jsx';
import { Provider } from 'react-redux';
import { store } from './components/Redux/Store.js';
import { QueryClient, QueryClientProvider } from 'react-query';
import ShowProperties from './components/Vip/ShowProperties.jsx';
import AddProperty from './components/Vip/AddProperty.jsx';
import EnableFeature from './components/Vip/EnableFeature.jsx';
import AddEnableFeature from './components/Vip/AddEnableFeature.jsx';
import RechargeBalance from './components/RechargeBalance/RechargeBalance.jsx';
import SilverCoins from './components/SilverCoins/SilverCoins.jsx';
import Complaints from './components/Complaints/Complaints.jsx';
import ExchangeCurrencies from './components/ExchangeCurrencies/ExchangeCurrencies.jsx';
import FamilyLevel from './components/FamilyLevel/FamilyLevel.jsx';
import Backgrounds from './components/Backgrounds/Backgrounds.jsx';
import TableFamilyLevel from './components/FamilyLevel/TableFamilyLevel.jsx';
import AddFamilyLevel from './components/FamilyLevel/AddFamilyLevel.jsx';
import TableSilverCoins from './components/SilverCoins/TableSilverCoins.jsx';
import AddSilverCoins from './components/SilverCoins/AddSilverCoins.jsx';
import MyComponent from './components/compooo/MyComponent.jsx';
import TableShowProperty from './components/Vip/TableShowProperty.jsx';
import TableEnableFeature from './components/Vip/TableEnableFeature.jsx';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import InverseProtected from './components/InverseProtected/InverseProtected.jsx';
import Emoji from './components/Emoji/Emoji.jsx';
import Rooms from './components/Rooms/Rooms.jsx';
import Gifts from './components/Gifts/Gifts.jsx';
import Transfers from './components/Transfers/Transfers.jsx';
import Families from './components/Families/Families.jsx';
import ListLevels from './components/ListLevels/ListLevels.jsx';
import BlackList from './components/BlackList/BlackList.jsx';
import PhoneCodes from './components/PhoneCodes/PhoneCodes.jsx';
import Store from './components/Store/Store.jsx';





let queryClient = new QueryClient();




function App() {






  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: 'login', element: <InverseProtected><Login /></InverseProtected> },
        { path: '/users/customers', element: <ProtectedRoute><Customers /></ProtectedRoute> },
        { path: '/users/moderators', element: <ProtectedRoute><Otp /></ProtectedRoute> },
        { path: 'allfolders', element: <ProtectedRoute><AllFolders /></ProtectedRoute> },
        { path: '/setting/coins', element: <ProtectedRoute><Coins /></ProtectedRoute> },
        { path: '/setting/countries', element: <ProtectedRoute><Countries /></ProtectedRoute> },
        { path: '/setting/roomcategories', element: <ProtectedRoute><RoomCategories /></ProtectedRoute> },
        { path: '/setting/target', element: <ProtectedRoute><Target /></ProtectedRoute> },
        { path: '/setting/usersetting', element: <ProtectedRoute><UserSetting /></ProtectedRoute> },
        {
          path: '/gift/vip/showproperties', element: <ProtectedRoute><ShowProperties /></ProtectedRoute>, children: [
            { index: true, element: <ProtectedRoute><TableShowProperty /></ProtectedRoute> },
            { path: 'add', element: <ProtectedRoute><AddProperty /></ProtectedRoute> }
          ]
        },
        {
          path: '/gift/vip/enablefeature', element: <ProtectedRoute><EnableFeature /></ProtectedRoute>, children: [
            { index: true, element: <ProtectedRoute><TableEnableFeature /></ProtectedRoute> },
            { path: 'add', element: <ProtectedRoute><AddEnableFeature /></ProtectedRoute> }
          ]
        },
        { path: '/app/rechargebalance', element: <ProtectedRoute><RechargeBalance /></ProtectedRoute> },
        {
          path: '/app/familylevel', element: <ProtectedRoute><FamilyLevel /></ProtectedRoute>, children: [
            { index: true, element: <ProtectedRoute><TableFamilyLevel /></ProtectedRoute> },
            { path: 'add', element: <ProtectedRoute><AddFamilyLevel /></ProtectedRoute> },
          ]
        },
        {
          path: '/app/silvercoins', element: <ProtectedRoute><SilverCoins /></ProtectedRoute>, children: [
            { index: true, element: <ProtectedRoute><TableSilverCoins /></ProtectedRoute> },
            { path: 'add', element: <ProtectedRoute><AddSilverCoins /></ProtectedRoute> },
          ]
        },
        { path: '/app/complaints', element: <ProtectedRoute><Complaints /></ProtectedRoute> },
        { path: '/app/exchangecurrencies', element: <ProtectedRoute><ExchangeCurrencies /></ProtectedRoute> },
        { path: '/app/rooms/backgrounds', element: <ProtectedRoute><Backgrounds /></ProtectedRoute> },
        {
          path: '/gift/items', element: <ProtectedRoute><Items /></ProtectedRoute>, children: [
            { index: true, element: <ProtectedRoute><TableItems /></ProtectedRoute> },
            { path: 'add', element: <ProtectedRoute><AddItems /></ProtectedRoute> },
          ]
        },
        {
          path: '/gift/vip', element: <ProtectedRoute><Vip /></ProtectedRoute>, children: [
            { index: true, element: <ProtectedRoute><TableVip /></ProtectedRoute> },
            { path: 'add', element: <ProtectedRoute><AddVip /></ProtectedRoute> },
          ]
        },
        { path: 'pages', element: <ProtectedRoute><Pages /></ProtectedRoute> },
        { path: 'notifications', element: <ProtectedRoute><Notifications /></ProtectedRoute> },
        { path: '/app/rooms/emoji', element: <ProtectedRoute><Emoji /></ProtectedRoute> },
        { path: '/app/rooms/rooms', element: <ProtectedRoute><Rooms /></ProtectedRoute> },
        { path: '/app/rooms/gifts', element: <ProtectedRoute><Gifts /></ProtectedRoute> },
        { path: '/app/transfers', element: <ProtectedRoute><Transfers /></ProtectedRoute> },
        { path: '/app/families', element: <ProtectedRoute><Families /></ProtectedRoute> },
        { path: '/app/listlevels', element: <ProtectedRoute><ListLevels /></ProtectedRoute> },
        { path: '/app/blacklist', element: <ProtectedRoute><BlackList /></ProtectedRoute> },
        { path: '/app/phonecodes', element: <ProtectedRoute><PhoneCodes /></ProtectedRoute> },
        { path: '/app/store', element: <ProtectedRoute><Store /></ProtectedRoute> },
        { path: 'ay', element: <MyComponent /> },
      ]
    }
  ]);



  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={routers}></RouterProvider>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
