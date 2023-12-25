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
import ControlAgency from './components/ControlAgency/ControlAgency.jsx';
import Countries from './components/Countries/Countries.jsx';
import CreateAgency from './components/CreateAgency/CreateAgency.jsx';
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





let queryClient = new QueryClient();








function App() {

  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'customers', element: <Customers /> },
        { path: 'moderators', element: <Otp /> },
        { path: 'allfolders', element: <AllFolders /> },
        { path: 'coins', element: <Coins /> },
        { path: 'controlagency', element: <ControlAgency /> },
        { path: 'countries', element: <Countries /> },
        { path: 'createagency', element: <CreateAgency /> },
        { path: 'roomcategories', element: <RoomCategories /> },
        { path: 'target', element: <Target /> },
        { path: 'usersetting', element: <UserSetting /> },
        { path: 'showproperties', element: <ShowProperties /> },
        { path: 'addproperty', element: <AddProperty /> },
        { path: 'enablefeature', element: <EnableFeature /> },
        { path: 'addenablefeature', element: <AddEnableFeature /> },
        { path: 'rechargebalance', element: <RechargeBalance /> },
        {
          path: 'familylevel', element: <FamilyLevel />, children: [
            { index: true, element: <TableFamilyLevel /> },
            { path: 'add', element: <AddFamilyLevel /> },
          ]
        },
        { path: 'silvercoins', element: <SilverCoins /> },
        { path: 'complaints', element: <Complaints /> },
        { path: 'exchangecurrencies', element: <ExchangeCurrencies /> },
        { path: 'backgrounds', element: <Backgrounds /> },
        {
          path: 'items', element: <Items />, children: [
            { index: true, element: <TableItems /> },
            { path: 'add', element: <AddItems /> },
          ]
        },
        {
          path: 'vip', element: <Vip />, children: [
            { index: true, element: <TableVip /> },
            { path: 'add', element: <AddVip /> },
          ]
        },
        { path: 'pages', element: <Pages /> },
        { path: 'notifications', element: <Notifications /> },
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
