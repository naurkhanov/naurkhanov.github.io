import React from 'react';
import FooterLogo from "./FooterLogo";
import FooterNav from "./FooterNav";
import Copyright from "./Copyright";

function Footer(props) {
    return (
        <div className="footer">
            <FooterLogo />
            <FooterNav />
            <Copyright />
        </div>
    );
}

export default Footer;