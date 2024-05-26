import React, { useState, useEffect } from 'react';
import DayCell from './DayCell';
import Header from './Header';
import ResourceBar from './ResourceBar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { getMonthDays, getToday } from '../utils/dateUtils';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [resources, setResources] = useState(['Resource A', 'Resource B', 'Resource C']);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(savedEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const removeEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const moveEvent = (eventId, newDate) => {
    setEvents(events.map(event => 
      event.id === eventId ? { ...event, date: newDate } : event
    ));
  };

  const days = getMonthDays(currentYear, currentMonth);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="calendar">
        <Header 
          currentMonth={currentMonth} 
          currentYear={currentYear} 
          setCurrentMonth={setCurrentMonth} 
          setCurrentYear={setCurrentYear} 
        />
        <div className="grid grid-cols-8">
          <ResourceBar resources={resources} setResources={setResources} />
          <div className="col-span-7 grid grid-cols-7 border">
            {days.map(day => (
              <DayCell 
                key={day.toISOString()} 
                day={day} 
                events={events} 
                addEvent={addEvent} 
                removeEvent={removeEvent}
                moveEvent={moveEvent}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Calendar;
