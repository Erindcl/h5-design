import React, { useState, useEffect } from 'react';
import './index.scss';

const Page: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1)
  }, [])

  return (
    <div>home page {count}</div>
  )
}

export default Page
