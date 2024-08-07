import React, { useState, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import Board from './components/Board';
import Filters from './components/Filters';

function App() {
  const [groupOption, setGroupOption] = useState('status');
  const [orderOption, setOrderOption] = useState('priority');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const group = searchParams.get('group');
    const order = searchParams.get('order');

    if (group) setGroupOption(group);
    if (order) setOrderOption(order);
  }, [searchParams]);

  const updateURL = (group, order) => {
    const params = new URLSearchParams();
    if (group) params.set('group', group);
    if (order) params.set('order', order);

    setSearchParams(params);
  };

  const handleSetGroupOption = (groupOption) => {
    setGroupOption(groupOption);
    updateURL(groupOption, orderOption);
  };

  const handleSetOrderOption = (orderOption) => {
    setOrderOption(orderOption);
    updateURL(groupOption, orderOption);
  };

  return (
    <div className="App">
      <Filters
        groupOption={groupOption}
        setGroupOption={handleSetGroupOption}
        orderOption={orderOption}
        setOrderOption={handleSetOrderOption}
      />
      <Board
        groupOption={groupOption}
        orderOption={orderOption}
      />
    </div>
  );
}

export default App;
