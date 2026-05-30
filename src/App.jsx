import '@faclon-labs/design-sdk/styles.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [active, setActive] = useState('memory');
  const [variant, setVariant] = useState('push');

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%', overflow: 'hidden', background: '#f5f6f8', position: 'relative' }}>
      <Sidebar active={active} setActive={setActive} variant={variant} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, minHeight: 0, overflow: 'hidden' }}>
        <TopNav variant={variant} onVariantChange={setVariant} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
