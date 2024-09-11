/**
 * title: 精确匹配
 * desc: 通过配置 `exactMatch`, 开启精确匹配。比如按 [shift + c] ，不会触发 [c]。
 */

import { CheckOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useKeyPress } from 'react-hooks';

export default () => {
  const [state, setState] = useState<number>();

  useKeyPress(['shift.c'], () => {
    setState(1);
  });

  useKeyPress(
    ['c'],
    () => {
      setState(2);
    },
    {
      exactMatch: true,
    },
  );

  return (
    <div>
      <p>Try pressing the following: </p>
      <div>
        1. Modifier key [shift.c]: {state === 1 && <CheckOutlined style={{ color: '#f00' }} />}
      </div>
      <div>2. Modifier key [c]: {state === 2 && <CheckOutlined style={{ color: '#f00' }} />}</div>
    </div>
  );
};
