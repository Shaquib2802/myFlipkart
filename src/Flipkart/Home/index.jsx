import React from "react";
import Bottom from "../bottom/index.jsx";

import Header1 from "../Header1/index.jsx";
import Content1 from "../content1/index.jsx";
import NewHeader from "../NewHeader.jsx";

export const Flipkart= () => {
  return (
    <div className="bg-gray-50">
      {/* <Header1/> */}
      <NewHeader/>
      <Content1/>
      <Bottom/>
    </div>
  );
};
export default Flipkart;