import { isEqual } from 'lodash-es';
import type { DependencyList } from 'react';

export const depsEqual = (aDeps: DependencyList = [], bDeps: DependencyList = []) =>
  isEqual(aDeps, bDeps);
