import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/constants';

const Event = ({ event, removeEvent }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.EVENT,
    item: { id: event.id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [event]);

  return (
    <div ref={drag} className="event p-1 mt-1 text-white rounded" style={{ backgroundColor: event.color, opacity: isDragging ? 0.5 : 1 }}>
      {event.title}
      <button onClick={() => removeEvent(event.id)} className="ml-2 text-xs">Delete</button>
    </div>
  );
};

export default Event;
