import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../page/dashboard/Dashboard";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import SendMoney from "../page/sendMoney/SendMoney";
import CashOut from "../page/cashOut/CashOut";
import CashIn from "../page/cashIn/CashIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: 'send-money',
        element: <SendMoney />
      },
      {
        path: 'cash-out',
        element: <CashOut />
      },
      {
        path: 'cash-in',
        element: <CashIn />
      },
    ]
  },
  
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
]);