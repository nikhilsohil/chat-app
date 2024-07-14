
import React, { useState, useEffect } from 'react';

export default function Dob({setDob,id,Change}) {
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const qntYears = 70;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();

    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
    const [selectedDay, setSelectedDay] = useState(new Date().getDate());
    const [days, setDays] = useState([]);

    // Populate years and days based on selected year and monthx
    const years = Array.from({ length: qntYears }, (_, i) => currentYear - i);

    useEffect(() => {
        const daysInMonth = new Date(selectedYear, selectedMonth , 0).getDate();
        setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
    }, [selectedYear, selectedMonth]);


    useEffect(() => {
        if (selectedYear === currentYear) {
            if (selectedMonth > currentMonth) {
                setSelectedMonth(currentMonth);
                setSelectedDay(currentDay);
            } else if (selectedMonth === currentMonth && selectedDay > currentDay) {
                setSelectedDay(currentDay);
            }
        }
    }, [selectedMonth, selectedYear,selectedDay]);

    
    
    setDob(selectedYear+"-"+selectedMonth+"-"+selectedDay);

    return (
        <>
            <div className="input-field">
                <div className="input-area">
                    <div className="input-container" id={id+"1"}>
                        <div className="input-box">

                            <select value={selectedDay}
                             onChange={(e)=>{setSelectedDay(parseInt(e.target.value))}} >
                                {days.map(day => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </select>

                        </div>

                    </div>
                        
                </div>
                <div className="input-area">
                    <div className="input-container" id={id+"2"}>
                        <div className="input-box">

                            <select value={selectedMonth} onChange={(e) => setSelectedMonth(parseInt(e.target.value))}>
                                {monthNames.map((month, index) => (
                                    <option key={index + 1} value={index +1}>{month}</option>
                                ))}
                            </select>

                        </div>

                    </div>
                </div>
                <div className="input-area">
                    <div className="input-container" id={id+"3"}>
                        <div className="input-box">

                            <select value={selectedYear} onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>

                        </div>

                    </div>
                </div>
            </div>
            <p className="input-error" id={id+"err"}></p>
        </>
    );
}