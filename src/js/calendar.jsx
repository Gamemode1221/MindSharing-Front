import React, { useState } from 'react';
import '../css/calendar.css';

// npm install react-calendar --save
const CalenDar = () => {
    const [date, setDate] = useState(new Date());
  
    const daysInMonth = (year, month) => {
      return new Date(year, month + 1, 0).getDate();
    };
  
    const firstDayOfMonth = (year, month) => {
      return new Date(year, month, 1).getDay();
    };
  
    const handlePrevMonth = () => {
      setDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    };
  
    const handleNextMonth = () => {
      setDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };
  
    const year = date.getFullYear();
    const month = date.getMonth();
  
    const days = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);
  
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    const calendarRows = [];
    let calendarCells = [];
  
    for (let i = 0; i < firstDay; i++) {
      calendarCells.push(<td key={i}></td>);
    }
  
    for (let i = 1; i <= days; i++) {
      const cellDate = new Date(year, month, i);
      const isToday = cellDate.toDateString() === new Date().toDateString();
      const classNames = ["calendar-cell"];
      if (isToday) classNames.push("today");
      calendarCells.push(
        <td key={i} className={classNames.join(" ")}>
          {i}
        </td>
      );
      if ((i + firstDay) % 7 === 0 || i === days) {
        calendarRows.push(<tr key={i}>{calendarCells}</tr>);
        calendarCells = [];
      }
    }
  
    return (
      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>Prev</button>
          <div className="calendar-title">{`${year}년 ${month + 1}월`}</div>
          <button onClick={handleNextMonth}>Next</button>
        </div>
        <table className="calendar">
          <thead>
            <tr>
              {weekdays.map((weekday) => (
                <th key={weekday}>{weekday}</th>
              ))}
            </tr>
          </thead>
          <tbody>{calendarRows}</tbody>
        </table>
      </div>
    );
  };

export default CalenDar;