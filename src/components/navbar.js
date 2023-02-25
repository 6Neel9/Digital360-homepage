import './nav.css'
// import { BsSearch } from "react-icons/Bs"
import { FiShoppingCart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";

function Nav() {
    return (
        <div className="nav">
            <div className="firstNav" style={{ marginTop: "1%", marginLeft: "1%" }}>
                &nbsp;&nbsp;<img style={{ width: "7vh" }} alt="logo" src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/fashion-logo-design.jpg" />
                {/* <span style={{fontStyle: "italic",fontWeight:"500",fontFamily:}}>Lorem</span> */}
            </div>
            <div className="midNav">
                <span style={{ textDecoration: "underline red" }}>HOME</span>&nbsp;&nbsp;
                <span>WOMEN'S</span>&nbsp;&nbsp;
                <span>MEN'S</span>&nbsp;&nbsp;
                <span>SHOP</span>&nbsp;&nbsp;
                <span>PAGES</span>&nbsp;&nbsp;
                <span>BLOG</span>&nbsp;&nbsp;
                <span>CONTACT</span>
            </div>
            <div className="lastNav">
                <span style={{ fontSize: '13px' }}>Login / Register</span>&nbsp;&nbsp;&nbsp;
                <span><FiSearch /></span>&nbsp;&nbsp;&nbsp;
                <span><GrFavorite /></span>&nbsp;&nbsp;&nbsp;
                <span><FiShoppingCart /></span>&nbsp;&nbsp;

            </div>
        </div>
    )
}

export default Nav