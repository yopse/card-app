import React from "react";
import ImageBox from "./ImageBox";
import MainContent from "./MainContent";
import Footer from "./Footer";
const ContentContainer = () => {


     return(
          <div className="ContentContainer">
               <ImageBox></ImageBox>
               <MainContent></MainContent>
               <Footer></Footer>
          </div>
     )
}


export default ContentContainer;