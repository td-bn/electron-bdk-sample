import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Body from './components/Body';

const rootNode = document.getElementById('root');

function render() {
  const root = ReactDOM.createRoot(rootNode);
  root.render(<Body />);
}

render();
