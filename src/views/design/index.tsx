import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './index.scss';

const Page: React.FC = () => {
  const [count, setCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setCount(1)
    console.log(location)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>{count}</div>
  )
}

export default Page
