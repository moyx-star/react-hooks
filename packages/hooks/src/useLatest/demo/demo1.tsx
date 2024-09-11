/**
 * title: 基础用法
 * desc: useLatest 返回的永远是最新值
 */

import React, { useEffect,useState } from 'react';
import { useLatest } from 'react-hooks';

export default () => {
  const [count, setCount] = useState(0);

  const latestCountRef = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>count: {count}</p>
    </>
  );
};
