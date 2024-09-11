// write your test cases here
import { act,renderHook } from '@testing-library/react';
import { fireEvent,render } from '@testing-library/react';
import React from 'react';

import useHover from '../index';

describe('useHover', () => {
  it('should work', () => {
    const { getByText } = render(<button>Hover</button>);
    let trigger = 0;
    const { result } = renderHook(() =>
      useHover(getByText('Hover'), {
        onEnter: () => {
          trigger++;
        },
        onLeave: () => {
          trigger++;
        },
      }),
    );

    expect(result.current).toBe(false);

    act(() => void fireEvent.mouseEnter(getByText('Hover')));
    expect(result.current).toBe(true);
    expect(trigger).toBe(1);

    act(() => void fireEvent.mouseLeave(getByText('Hover')));
    expect(result.current).toBe(false);
    expect(trigger).toBe(2);
  });
});
