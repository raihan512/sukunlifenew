import React from "react";
import Banner from "../Banner/Banner";
import HomeBlog from "../HomeBlog/HomeBlog";
import HomeConsultant from "../HomeConsultant/HomeConsultant";
import Introduction from "../Introduction/Introduction";
import Subscribe from "../../Shared/Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeConsultant></HomeConsultant>
      <Introduction></Introduction>
      <Subscribe></Subscribe>
      <HomeBlog></HomeBlog>
    </div>
  );
};

export default Home;
