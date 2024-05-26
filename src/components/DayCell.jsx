import React from 'react';
import { useDrop } from 'react-dnd';
import Event from './Event';
import { ItemTypes } from '../utils/constants';

const DayCell = ({ day, events, addEvent, removeEvent, moveEvent }) => {
  const dayEvents = events.filter(event => event.date === day.toISOString().split('T')[0]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.EVENT,
    drop: (item) => moveEvent(item.id, day.toISOString().split('T')[0]),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [day, events]);

  return (
    <div ref={drop} className={`day-cell border p-2 ${isOver ? 'bg-gray-200' : ''}`}>
      <div className="day-number text-sm font-bold">{day.getDate()}</div>
      {dayEvents.map(event => (
        <Event key={event.id} event={event} removeEvent={removeEvent} />
      ))}
      <button className="text-xs text-blue-500 mt-1" onClick={() => addEvent({ id: Date.now(), date: day.toISOString().split('T')[0], title: 'New Event', color: '#f00' })}>
        Add Event
      </button>
    </div>
  );
};

export default DayCell;
