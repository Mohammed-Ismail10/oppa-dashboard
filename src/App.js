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





let queryClient = new QueryClient();








function App() {

  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'العملاء', element: <Customers /> },
        { path: 'المشرفين', element: <Otp /> },
        { path: 'allfolders', element: <AllFolders /> },
        { path: 'الكوينز', element: <Coins /> },
        { path: 'التحكم في الوكالة', element: <ControlAgency /> },
        { path: 'الدول', element: <Countries /> },
        { path: 'إنشاء وكالة', element: <CreateAgency /> },
        { path: 'فئات الغرف', element: <RoomCategories /> },
        { path: 'التارجيت', element: <Target /> },
        { path: 'ضبط المستخدم', element: <UserSetting /> },
        { path: 'showproperties', element: <ShowProperties /> },
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
        { path: 'الصفحات', element: <Pages /> },
        { path: 'الإشعارات', element: <Notifications /> },
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
