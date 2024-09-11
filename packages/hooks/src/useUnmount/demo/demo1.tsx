/**
 * title: 基础用法
 * desc: 在组件卸载时，执行函数。
 */

import { message } from 'antd';
import React from 'react';
import { useBoolean, useUnmount } from 'react-hooks';

const MyComponent = () => {
  useUnmount(() => {
    message.info('unmount');
  });

  return <p>Hello World!</p>;
};

export default () => {
  const [state, { toggle }] = useBoolean(true);

  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  );
};
