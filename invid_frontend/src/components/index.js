import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";

import "./index.scss";
import LandingPage from "./LandingPage";
import MoviePage from "./MoviePage";
import SearchPage from "./SearchPage";
import NotFoundPage from "./NotFoundPage";
import LoginUser from "./LoginUser";
import LoginAdmin from "./LoginAdmin";
import AdminArea from "./AdminArea";
import UploadMovie from "./UploadMovie";
import UserArea from "./UserArea";
import Intro from "./Intro";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Intro} />
      <PrivateRoute path="/main" exact component={LandingPage} />
      <Route path="/admin" exact component={LoginAdmin} />
      <Route path="/login" exact component={LoginUser} />
      <PrivateRoute path="/admin/private" exact component={AdminArea} />
      <PrivateRoute path="/user" exact component={UserArea} />
      <PrivateRoute path="/user/upload" exact component={UploadMovie} />
      <PrivateRoute path="/search/:searchInput" component={SearchPage} />
      <PrivateRoute path="/movie/:movieId" exact component={MoviePage} />
      <Route exact path="/:unfoundLocation" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
export default Router;
