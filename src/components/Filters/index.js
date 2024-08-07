import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { groupingOptions, orderingOptions } from './constants';

import down from '../../assets/down.svg';
import display from '../../assets/Display.svg';

import './Filters.css'

const Filters = ({
  groupOption,
  setGroupOption,
  orderOption,
  setOrderOption,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (showOptions) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showOptions]);

  const handleClickOutside = (e) => {
    if (e.target.closest('.filters-dropdown')) {
      return;
    }
    setShowOptions(false);
  };

  const handleDisplayClick = (e) => {
    e.stopPropagation();
    setShowOptions(!showOptions);
  };

  const handleOrderOptionSelect = (e) => {
    setOrderOption(e.target.value);
  };

  const handleGroupOptionSelect = (e) => {
    setGroupOption(e.target.value);
  };

  const renderFilters = () => (
    createPortal(
      <div
        className="filters-dropdown"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="filters-group"
        >
          <div>Grouping</div>
          <div>
            <select name="group" id="group" value={groupOption} onChange={handleGroupOptionSelect}>
              {groupingOptions.map((option) => (
                <option key={option.id} value={option.value}>{option.title}</option>
              ))}
            </select>
          </div>
        </div>
        <div
          className="filters-group"
        >
          <div>Ordering</div>
          <div>
            <select name="order" id="order" value={orderOption} onChange={handleOrderOptionSelect}>
              {orderingOptions.map((option) => (
                <option key={option.id} value={option.value}>{option.title}</option>
              ))}
            </select>
          </div>
        </div>
      </div>, document.body
    )
  )

  return (
    <div className="filters">
      <button className="dropbtn" onClick={handleDisplayClick}>
        <img
          className="avatar"
          src={display}
          alt="Display"
        />
        Display
        <img
          className="avatar"
          src={down}
          alt="Down"
        />
        {
          showOptions && renderFilters()
        }
      </button>
    </div>
  )
};

export default Filters;
