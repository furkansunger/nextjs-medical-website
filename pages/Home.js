import React from "react";
import {
  About,
  Contact,
  Gallery,
  Header,
  Services,
  Treatments,
} from "../components/HomePage";
import Testimonals from "../components/HomePage/Testimonals";
import AppWrapper from "../wrapper/AppWrapper";


const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Treatments />
      <Testimonals />
      <Gallery />
      <Contact />

    </>
  );
};

export default AppWrapper(Home);
