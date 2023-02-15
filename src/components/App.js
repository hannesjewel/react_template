import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout'
import Home from './Home'
import Contact from './Contact'
import Thankyou from './Thankyou'
import Signup from './Signup'
import Signin from './Signin'
import ForgotPassword from './ForgotPassword'
import ForgotPasswordOtp from './ForgotPasswordOtp'
import ForgotPasswordReset from './ForgotPasswordReset'
import PageNotFound from './PageNotFound'
import Ui from './Ui'

//dashboard
import DashboardLayout from './dashboard/Layout'
import DashboardHome from './dashboard/DashboardHome'
import DashboardAccount from './dashboard/DashboardAccount'

import DashboardUsers from './dashboard/Users'
import DashboardUsersBin from './dashboard/Users/Bin'
import DashboardUserCreate from './dashboard/Users/Create'
import DashboardUserEdit from './dashboard/Users/Edit'

import Dashboard404 from './dashboard/Dashboard404'

import PageTracker from '../PageTracker'

const App = () => {
  return (
    <BrowserRouter>
      <PageTracker />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/ui" element={<Ui />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/thankyou" element={<Thankyou />} />
          {['admin', 'signin', 'login'].map(path => <Route key={path} path={path} element={<Signin />} />)}
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/forgot-password/otp" element={<ForgotPasswordOtp />} />
          <Route path="/forgot-password/reset" element={<ForgotPasswordReset />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="/dashboard/account" element={<DashboardAccount />} />

          <Route path="/dashboard/users" element={<DashboardUsers />} />
          <Route path="/dashboard/users/bin" element={<DashboardUsersBin />} />
          <Route path="/dashboard/users/:id" element={<DashboardUserCreate />} />
          <Route path="/dashboard/users/:id/edit" element={<DashboardUserEdit />} />
          <Route path="/dashboard/*" element={<Dashboard404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App