import Reducer from './Reducer';
import { Provider as ProviderRedux } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: Reducer,
});

const Redux = (props) => {
    return (
    <ProviderRedux store={store}>
        {props.children}
    </ProviderRedux>)
}
export default Redux;