import React from "react";
import ViewMovie from "./ViewMovie";
import { Nav, Footer } from "@/components/Global";
import StartVotes from "../Global/StarVotes";

const containerVideo = {};

const Movie = () => (
  <div>
    <Nav />
    <ViewMovie />
  </div>
);

export default Movie;
