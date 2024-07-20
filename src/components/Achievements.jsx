import React from "react";
import checkIcon from '../images/pin.png'

export const Achievements = () => {
    return(
        <div className="achievement-list">
            <div className="achievement">
                <img src={checkIcon} alt="check icon" className="check-icon" />
                Более 10 000 клиентов
            </div>
            <div className="achievement">
                <img src={checkIcon} alt="check icon" className="check-icon" />
                2 клиник в 2 городах
            </div>
            <div className="achievement">
                <img src={checkIcon} alt="check icon" className="check-icon" />
                Улучшения с первых сеансов
            </div>
            <div className="achievement">
                <img src={checkIcon} alt="check icon" className="check-icon" />
                С 9 лет помогаю людям поправить<br/> здоровье,  а значит быть счастливее
            </div>          
        </div>
    )
}