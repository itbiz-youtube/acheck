import React from 'react';
import { hot } from 'react-hot-loader/root';
import "./bootstrap-includes";
import SentryBoundary from './utils/SentryBoundary';
import BootstrapNavbar from "./BootstrapNavbar";
import APIInfo from "./pages/APIInfo";
import CheckEmail from "./pages/CheckEmail";
import ContactUs from "./pages/ContactUs";
const App = () => (
  <SentryBoundary>
    <BootstrapNavbar />
  </SentryBoundary>
);

export default hot(App);
