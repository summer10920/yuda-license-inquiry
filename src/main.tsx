import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App/App.tsx'

async function enableMocking() {
  if (import.meta.env.VITE_ENABLE_MSW !== 'true') {
    return Promise.resolve();
  }
  const { worker } = await import('./core/api/mocks/browser.ts');
  return worker.start()
}

enableMocking()
  .finally(() => {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>
    )
  });