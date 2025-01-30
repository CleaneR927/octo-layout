import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import { Provider } from 'mobx-react';
import TaskStore from './stores/TaskStore';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider TaskStore={TaskStore}>
      <App />
    </Provider>
  </StrictMode>
);

