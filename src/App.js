import React from 'react';
import './App.css';
import NewShopForm from './NewShopForm';
import Uncontrolled from './Uncontrolled_modified';
import Checkbox from './Checkbox_modified';
import Controlled from './Controlled_modified';
import Dropdown from './Dropdown_modified';
import './enhanced_styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewShopForm />
<div className="component-section">
<h2>Uncontrolled Form</h2>
<Uncontrolled />
</div>
<div className="component-section">
<h2>Checkbox Form</h2>
<Checkbox />
</div>
<div className="component-section">
<h2>Controlled Form</h2>
<Controlled />
</div>
<div className="component-section">
<h2>Dropdown Form</h2>
<Dropdown />
</div>
      </header>
    </div>
  );
}

export default App;