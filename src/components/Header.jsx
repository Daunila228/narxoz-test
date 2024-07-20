import React from "react";
import logo from '../images/logo.png';
import call from '../images/call.png';

export const Header = () => {
  return (
    <div style={{borderBottom: '1px solid black'}} className="Header">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="contact">
            <p className="feedback">Отзывы</p>
            <div className="phone">
              <img src={call} width={20} height={20} style={{ marginTop: 2, marginRight: 5 }} alt="Call" />
              <p>+7708 842 0052</p>
            </div>
            <div className="language-dropdown">
              <select>
                <option value="ru">RU</option>
                <option value="en">EN</option>
                <option value="kz">KZ</option>
              </select>
            </div>
            <button className="signup-button">Записаться</button>
          </div>
        </div>
      </header>
    </div>
  );
};
