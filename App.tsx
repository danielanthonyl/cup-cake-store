import {Provider} from 'react-redux';
import {Navigator} from './src/navigation';
import {store} from './src/store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};
