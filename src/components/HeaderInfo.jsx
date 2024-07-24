import React from "react";

export const HeaderInfo = () => {
    return (
        <div className="headerInfo">
            <div className="title">
                ЛЕКАРЬ <br /> МЕЖДУНАРОДНОГО <br /> УРОВНЯ
            </div>
            <div className="diseases">
                <div className="disease">Головные боли &emsp; Головные боли &emsp; Головные боли</div>
                <div className="disease">&emsp;Задержки в развитии &emsp;&emsp; Задержки в развитии</div>
                <div className="disease">&emsp;Гиперактивность &emsp;&emsp; Гиперактивность</div>
                <div className="disease">&emsp;Эпилепсии &emsp;&emsp; Эпилепсии</div>
                <div className="disease">&emsp;Хронические болезни</div>
                <div className="disease">&emsp;Многое другое</div>
                <div className="overlay"></div>
            </div>
        </div>
    );
}
