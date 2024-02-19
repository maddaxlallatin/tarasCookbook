import React from "react";

function SearchBar() {
  return (
    <div className="justify-center flex bg-softwhite">
      <div className="top-5 bg-softwhite fixed p-2 z-10  text-lg p-1 rounded-full border-2 border-black">
        <input className="outline-0 bg-softwhite search-cancel:appearance-none" type="search" placeholder="Search..." id='searchBar' onSubmit={() => { document.getElementById(document.getElementById("searchBar").value.toLowerCase()).scrollIntoView({ behavior: "smooth" }); }}/>
        <button className="pr-2 " type="submit" onClick={() => { document.getElementById(document.getElementById("searchBar").value.toLowerCase()).scrollIntoView({ behavior: "smooth" }); }}>
          <svg width="24" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;