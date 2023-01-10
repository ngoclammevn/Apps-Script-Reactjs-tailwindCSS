import * as React from 'react';
import { render } from 'react-dom';
import ExampleComponent from './components/ExampleComponent';
const App = () => {
  return (
    <>
      <h1>Hello world!</h1>
      <ExampleComponent />
    </>
  );
};

render(<App />, document.getElementById('app'));
