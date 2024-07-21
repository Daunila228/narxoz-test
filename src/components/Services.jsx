import React from 'react';

export const Services = () => {
    return (
        <div className="services-container">
            <div className="services-title">
                <h2>УСЛУГИ <br/> ОЗДОРОВИТЕЛЬНОГО <br/> ЦЕНТРА <span>UKILI BALA</span></h2>
            </div>
            <div className="services-list">
                <div className="service-item">
                    <p>классический массаж</p>
                    &emsp;<span>▼</span>
                </div>
                <div className="service-item">
                    <p>массаж банками</p>
                    &emsp;<span>▼</span>
                </div>
                <div className="service-item">
                    <p>огненный массаж</p>
                    &emsp;<span>▼</span>
                </div>
                <div className="service-item">
                    <p>хиджама</p>
                    &emsp;<span>▼</span>
                </div>
                <div className="service-item">
                    <p>юмейхо терапия</p>
                    &emsp;<span>▼</span>
                </div>
            </div>
        </div>
    );
};

