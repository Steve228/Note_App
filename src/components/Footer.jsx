import React from "react";


function Footer() {
    const currentyear = new Date().getFullYear();
    return(
        <div><footer><p>Copyright © {currentyear}</p></footer></div>
    );
}

export default Footer;