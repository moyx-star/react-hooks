/**
 * title.zh-CN: 基础用法
 * desc.zh-CN: 获取鼠标位置。
 */

import React from 'react';
import { useMouse } from 'react-hooks';

export default () => {
  const mouse = useMouse();

  return (
    <div>
      <p>
        Client - x: {mouse.clientX}, y: {mouse.clientY}
      </p>
      <p>
        Page - x: {mouse.pageX}, y: {mouse.pageY}
      </p>
      <p>
        Screen - x: {mouse.screenX}, y: {mouse.screenY}
      </p>
    </div>
  );
};
