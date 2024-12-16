import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App/App.tsx'
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";


async function enableMocking() {
  if (import.meta.env.VITE_ENABLE_MSW !== 'true') {
    return Promise.resolve();
  }

  loadDevMessages();
  loadErrorMessages();
  
  const { worker } = await import('./core/api/mocks/browser.ts');
  return worker.start({
    onUnhandledRequest: 'bypass'
  })
}

enableMocking()
  .finally(() => {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>
    )
  });