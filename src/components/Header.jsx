import React from 'react';
import { getMonthName } from '../utils/dateUtils';

const Header = ({ currentMonth, currentYear, setCurrentMonth, setCurrentYear }) => {
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="header flex justify-between items-center p-4 bg-gray-100">
      <button onClick={handlePrevMonth}>&lt; Previous</button>
      <span>{getMonthName(currentMonth)} {currentYear}</span>
      <button onClick={handleNextMonth}>Next &gt;</button>
    </div>
  );
};

export default Header;
