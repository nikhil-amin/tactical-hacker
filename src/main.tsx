import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <AppWrapper />
    </StrictMode>
  );
}

function AppWrapper() {
  const [user, setUser] = useState<{ fullName: string; role: string } | null>(null);

  return (
    <Router basename="/tactical-hacker">
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
}
