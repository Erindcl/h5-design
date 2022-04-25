import React, { useState, useEffect } from 'react';
import './index.scss';

const Panel: React.FC<any> = () => {
  const [count, setCount] = useState(0);

  return (
    <div>{count}</div>
  )
}

export default Panel
