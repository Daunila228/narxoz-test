import React from "react";
import doctor from '../images/doctor.jpeg';

export const HeaderImg = () => {
    return (
        <div className="headerDoctorContainer">
            <img src={doctor} alt="doctor" className="headerDoctor" />
        </div>
    );
};
