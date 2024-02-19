import React, { useRef } from 'react';

function SideBar() {
  const scollToRef = useRef();
  return (
    <div className="fixed items-left z-10" id="Side Bar">
      <div className="pl-4 flex pb-4" id="appitizers-sidebar">
        <button className="border-2 border-black rounded-full h-8 w-52 bg-white hover:bg-lightgray" onClick={() => { document.getElementById("appitizers").scrollIntoView({ behavior: "smooth" }); }}>
          Appetizers & Beverages
        </button>
      </div>
      <div className="pl-4 flex pb-4" id="bread-sidebar">
        <button className="border-2 border-black rounded-full h-8 w-52 bg-white hover:bg-lightgray" onClick={() => { document.getElementById("bread").scrollIntoView({ behavior: "smooth" }); }}>
          Bread and Muffins
        </button>
      </div>
      <div className="pl-4 flex pb-4" id="soups-sidebar">
        <button className="border-2 border-black rounded-full h-8 w-52 bg-white hover:bg-lightgray" onClick={() => { document.getElementById("soup").scrollIntoView({ behavior: "smooth" }); }}>
          Soups & Salads
        </button>
      </div>

      <div className="pl-4 flex pb-4" id="main-sidebar">
        <button className="border-2 border-black rounded-full h-8 w-52 bg-white hover:bg-lightgray" onClick={() => { document.getElementById("main_course").scrollIntoView({ behavior: "smooth" }); }}>
        Main Courses
        </button>
        </div>
        <div className="pl-4 flex pb-4" id="vegetables-sidebar">
        <button className="border-2 border-black rounded-full h-8 w-52 bg-white hover:bg-lightgray" onClick={() => { document.getElementById("vegetables").scrollIntoView({ behavior: "smooth" }); }}>
        Vegetables
        </button>
        </div>
        <div className="pl-4 flex pb-4" id="desserts-sidebar">
        <button className="border-2 border-black rounded-full h-8 w-52 bg-white hover:bg-lightgray" onClick={() => { document.getElementById("dessert").scrollIntoView({ behavior: "smooth" }); }}>
        Desserts
        </button>
        </div>
        <div className="pl-4 flex pb-4" id="other-sidebar">
        <button className="border-2 border-black rounded-full h-8 w-52 bg-white hover:bg-lightgray" onClick={() => { document.getElementById("other").scrollIntoView({ behavior: "smooth" }); }}>
        Other
        </button>
        </div>
    </div>
  );
}

export default SideBar;