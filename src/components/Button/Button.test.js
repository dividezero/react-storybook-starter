import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Button variant="primary" onClick={() => {}}>
      This is a button!
    </Button>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
