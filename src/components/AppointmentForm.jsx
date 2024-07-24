import React from 'react';
import block from '../images/block.png'

export const AppointmentForm = () => {
    return (
        <div className="appointment-container">
            <div className="form-section">
                <h2>ЗАЯВКА НА ЗАПИСЬ</h2>
                <form>
                    <input type="text" placeholder="    Имя" />
                    <input type="text" placeholder="    Фамилия" />
                    <div className="half-input">
                        <input type="text" placeholder="    Возраст"  className="age-input" style={{marginRight: 20}}/>
                        <input type="text" placeholder="    Город" className="city-input"/>
                    </div>
                    <input type="text" placeholder="    Диагноз" />
                    <button type="submit">Записаться</button>
                </form>
            </div>
            <div className="info-section">
                <h2>БОЛЕЗНИ КОТОРЫЕ МЫ <br/><span>НЕ ПРИНИМАЕМ :</span></h2>
                <ul>
                    <li>
                        <img src={block} alt="nono" width={32} />
                        ОНКОЛОГИЯ
                    </li>
                    <li>
                        <img src={block} alt="nono" width={32} />
                        ГЕПАТИТ(ВСЕ ВИДЫ)
                    </li>
                    <li>
                        <img src={block} alt="nono" width={32} />
                        АЛКОГОЛИЗМ
                    </li>
                    <li>
                        <img src={block} alt="nono" width={32} />
                        КОЛЯСОЧНИКОВ
                    </li>
                </ul>
            </div>
        </div>
    );
};

