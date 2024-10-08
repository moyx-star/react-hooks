import type { DependencyList, EffectCallback } from 'react';
import { useRef } from 'react';

import { depsEqual } from './depsEqual';
import type { BasicTarget } from './domTarget';
import useEffectWithTarget from './useEffectWithTarget';

const useDeepCompareEffectWithTarget = (
  effect: EffectCallback,
  deps: DependencyList,
  target: BasicTarget<any> | BasicTarget<any>[],
) => {
  const ref = useRef<DependencyList>();
  const signalRef = useRef<number>(0);

  if (!depsEqual(deps, ref.current)) {
    ref.current = deps;
    signalRef.current += 1;
  }

  useEffectWithTarget(effect, [signalRef.current], target);
};

export default useDeepCompareEffectWithTarget;
