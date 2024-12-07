// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import Inquiry from './Inquiry';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Inquiry />,
    },
    // {
    //   path: '*',
    //   element: <NotFound />,
    // },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);


function App() {
  // const [count, setCount] = useState(0)
  return (
    <RouterProvider router={router} />
  );


  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Inquiry />} />
  //       {/* <Route path="/admin" element={<Admin />} /> */}
  //       {/* <Route path="*" element={<NotFound />} /> */}
  //     </Routes>
  //   </BrowserRouter>
  // )
}
{/* <Checkout />
<div>
  <a href="https://vite.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.tsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p>
</> */}

export default App;
