import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store';
import { useAppDispatch } from './useAppDispatch.ts';

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
