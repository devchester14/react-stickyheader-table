import React from 'react';
import ReactDOM from 'react-dom';
import { StickyTable, Row, Cell } from 'react-sticky-table';

import './styles.css';

function App() {
  var rows = [];
  var cells;

  for (var r = 0; r < 50; r++) {
    cells = [];

    for (var c = 0; c < 50; c++) {
      cells.push(<Cell key={c}>{(r === 0 ? 'Header ' : 'Cell ') + c}</Cell>);
    }

    rows.push(<Row key={r}>{cells}</Row>);
  }

  return (
    <div>
      <div style={{ width: '100%', height: '200px' }}>
        <StickyTable stickyHeaderCount={2}>{rows}</StickyTable>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
