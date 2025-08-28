import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SmoothScrolling from './components/Smoothly-scroll';
import { ColorProvider } from './provider/color';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ColorProvider>
    <SmoothScrolling>
      <App />
    </SmoothScrolling>
  </ColorProvider>
);

