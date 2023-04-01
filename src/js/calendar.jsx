import React, { useState } from 'react';
import '../css/calendar.css';

// npm install react-calendar --save
function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState([]);

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const renderCalendarDays = () => {
    const monthDays = [];
    const numDays = daysInMonth(currentMonth);
    const firstDay = firstDayOfMonth(currentMonth);

    for (let i = 0; i < firstDay; i++) {
      monthDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let i = 1; i <= numDays; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      const dayEvents = events.filter((event) => {
        return (
          event.date.getFullYear() === date.getFullYear() &&
          event.date.getMonth() === date.getMonth() &&
          event.date.getDate() === date.getDate()
        );
      });
      const hasEvent = dayEvents.length > 0;
      monthDays.push(
        <div key={date.toDateString()} className={`calendar-day ${hasEvent ? 'has-event' : ''}`} onClick={() => showEvents(date)}>
          <div className="day-number">{i}</div>
          {hasEvent && <div className="event-indicator"></div>}
        </div>
      );
    }

    return monthDays;
  };

  const addEvent = (date) => {
    const title = prompt('추가할 일정 :');
    if (title) {
      const id = Math.random().toString(36).substr(2, 9);
      const event = { id, title, date };
      setEvents([...events, event]);
    }
  };

  const showEvents = (date) => {
    const dayEvents = events.filter((event) => {
      return (
        event.date.getFullYear() === date.getFullYear() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getDate() === date.getDate()
      );
    });

    if (dayEvents.length > 0) {
      const eventList = dayEvents.map((event) => (
        <div key={event.id} className="event">
          {event.title}
        </div>
      ));
      alert(`${date.toDateString()}:\n${eventList}`);
    } else {
      const confirmed = window.confirm('입력된 일정이 없습니다. 추가하시겠습니까?');
      if (confirmed) {
        addEvent(date);
      }
    }
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="calendar-nav" onClick={prevMonth}>
          &lt;
        </button>
        <div className="calendar-title">{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
        <button className="calendar-nav" onClick={nextMonth}>
          &gt;
        </button>
      </div>
      <div className="calendar-grid">{renderCalendarDays()}</div>
    </div>
  );
}

export default Calendar;