import { RootStateKeyType } from '../types/injector-typings';
import { createSlice as createSliceOriginal, SliceCaseReducers, CreateSliceOptions } from '@reduxjs/toolkit';

/* istanbul ignore next */
const createSlice = <State, CaseReducers extends SliceCaseReducers<State>, Name extends RootStateKeyType>(
  options: CreateSliceOptions<State, CaseReducers, Name>,
) => createSliceOriginal(options);

export default createSlice;
