function Header({ onToggleSidebar }) {

     return ( 
        <div className="header">

 <button className="menuButton" onClick={onToggleSidebar} >
          ☰ 
        </button>
        <h1> عـــتـــاد 🛡️</h1>

        </div>
);
}


    
export default Header;