import React, { useState } from 'react';

import { groupingOptions, orderingOptions } from './constants';

const Filters = ({
  groupOption,
  setGroupOption,
  orderOption,
  setOrderOption,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleDisplayClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOrderOptionSelect = (e) => {
    setOrderOption(e.target.value);
  };

  const handleGroupOptionSelect = (e) => {
    setGroupOption(e.target.value);
  };

  return (
    <div className="filters">
      <div className="dropdown">
        <button className="dropbtn" onClick={handleDisplayClick}>Display</button>
        {
          showOptions && (
            <div>
              <div>
                <div>Grouping</div>
                <div>
                  <select name="group" id="group" value={groupOption} onChange={handleGroupOptionSelect}>
                    {groupingOptions.map((option) => (
                      <option key={option.id} value={option.value}>{option.title}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <div>Ordering</div>
                <div>
                  <select name="order" id="order" value={orderOption} onChange={handleOrderOptionSelect}>
                    {orderingOptions.map((option) => (
                      <option key={option.id} value={option.value}>{option.title}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
};

export default Filters;
