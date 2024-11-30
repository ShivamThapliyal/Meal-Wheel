import React, { useState } from "react";
import Header from "../../components/Navbar/Header/Header";
import ExploreMenu from "../../components/Navbar/exploreMenu/ExploreMenu";
import FoodDisplay from "../../components/fooddisplay/FoodDisplay";
import Appdownload from "../../components/Appdownload'/Appdownload";

function HOme() {
  const [category, setcategory] = useState("ALL");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setcategory={setcategory} />
      <FoodDisplay category={category} />
      <Appdownload />
    </div>
  );
}

export default HOme;
