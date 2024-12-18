import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Flipkart from "./Flipkart/Home/index.jsx";
import Below from "./Flipkart1/index.jsx";
import Nested from "./Flipkart1/Nested/index.jsx";
import Header1 from "./Flipkart/Header1/index.jsx";
import Signup from "./loginFlip/form2.jsx";
import Product from "./component/Product_details/index.jsx";
import Error from "./Rout/Error/index.jsx";
import Insider from "./Flipkart/Insider.jsx";
import Header_sm from "./Flipkart/Header_sm.jsx";
import AutoPlaySlider from "./Flipkart/Slider.jsx";
import Insider1 from "./component/Insider1.jsx";
import Bottom from "./Flipkart/Bottom/index.jsx";
import Form1 from "./Form1.jsx";
import Form3 from "./Form3.jsx";
import Form4 from "./form4.jsx";
import NewHeader from "./Flipkart/NewHeader.jsx";
import MapSLider from "./Flipkart/MapSLider.jsx";
import Details from "./Flipkart/Home/Details.jsx";
import { ClassNames } from "@emotion/react";
import Post from "./Flipkart/Post.jsx";
import APForm from "./Flipkart/API Task/APForm.jsx";
import Flip from "./loginFlip/form.jsx";
import Rest from "../Rest.jsx";
import Aform from "../Aform.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Flipkart />} />
          <Route path="/" element={<MapSLider />} /> */}
          {/* <Route path="/form" element={<APForm />}/> */}
          {/* <Route path="/nested" element={<Nested />} />
          <Route path="/below" element={<Below />} />
          <Route path="/elect" element={<Signup />} />
          <Route path="/detail/:id/:slug" element={<Details />} /> */}
          <Route path="/" element={<Rest/>} />
          <Route path="/try1" element={<Aform />} />
          {/* <Route path="/try/:id" element={<APForm />} /> */}
        </Routes>
        
      </BrowserRouter>
      
    </>
    /*    <div><Post/> </div> */
    /* <Route path="/appliances" element={<Appliances />} /> */
    /*  <>
      <BrowserRouter>
        <Routes> */
    /* <Route path="/" element={<MapSLider />} />
          <Route path="/detail/:id" element={<Details />} /> */
    /*   </Routes>
      </BrowserRouter>
    </> */
    /*     <div><Signup/></div>
     */
    /* /* <AutoPlaySlider/> */

    /* <Below/> */
    /* <Nested/> */
    /* <Flip/> *
   /* <Header1/>
   <Content1/>
   <Bottom/> */

    /* <SimpleSlider/> 
    /* <Signup/> */
  );
}

export default App;
