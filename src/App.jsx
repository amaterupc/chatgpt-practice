import React from 'react';
import PromptCard from './components/PromptCard';
import { prompts } from './data/prompts';

function App() {
  return (
    <div className="App">
      <header style={{ marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>
        <h1 style={{
          fontSize: '3rem',
          background: 'linear-gradient(to right, #38bdf8, #818cf8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: 'var(--spacing-xs)'
        }}>
          Prompt Gallery
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          A collection of useful ChatGPT prompts
        </p>
      </header>

      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: 'var(--spacing-md)'
      }}>
        {prompts.map(prompt => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </main>

      <footer style={{
        marginTop: 'var(--spacing-lg)',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.3)',
        fontSize: '0.9rem'
      }}>
        <p>&copy; {new Date().getFullYear()} Prompt Gallery. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
