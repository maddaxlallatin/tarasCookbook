import React from "react"  ;

function MenuButton() {
    function closeSideBar() {
        switch(document.getElementById("Side Bar").style.display)
        {
            case "block":
                document.getElementById("Side Bar").style.display = "none";
                break;
            case "none":
                document.getElementById("Side Bar").style.display = "block";
                break;
            default:
                document.getElementById("Side Bar").style.display = "block";
        }
    }

    return (
        <div className="fixed flex left-2 top-5 pr-0 block md:hidden" id="menu-toggle">
        <button onClick={closeSideBar}>
        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          width="50px" height="50" viewBox="0 0 24.75 24.75" xml:space="preserve"
        >
          <g>
            <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2
		c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2
		c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"/>
          </g>
        </svg>
        </button>
      </div>
    );
}

export default MenuButton;