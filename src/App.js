import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import Home from "./home.js";
import Login from "pages/Login.js"
import SignUp from "pages/Signup.js"
import VerifyPhone from "pages/VerifyEmailnPhone.js"
import FillDetails from "pages/FillDetails.js"
/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/verify-phone">
          <VerifyPhone />
        </Route>
        <Route path="/fill-details">
          <FillDetails />
        </Route>
      </Switch>
    </Router>
  );
}