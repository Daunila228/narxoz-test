import React from "react";
import whatsapp from '../images/whatsapp.png'
import insta from '../images/insta.png'

export const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-title">
                Alternative & Holistic Health Service
            </div>
            <div className="footer-adresses">
                <p style={{fontWeight: 500, fontSize: 20, lineHeight: '24px'}}>КЛИНИКИ:</p>
                <p style={{fontWeight: 400, fontSize: 20, lineHeight: '24px'}}>г. АКТОБЕ, ул.Мангалак Ел, 10, мкр. Батыс-2</p>
                <p style={{fontWeight: 400, fontSize: 20, lineHeight: '24px'}}>г. АКТАУ, 13-й микрорайон, 48, 1 этаж</p>
            </div>
            <div className="footer-links">
                <div className="links-phone">+7708 842 0052</div>
                <img src={whatsapp} alt="" height={60} />
                <img src={insta} alt="" height={60}/>
            </div>
        </div>
    )
}