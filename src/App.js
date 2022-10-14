import logo from './logo.svg';
import './App.css';
import ReactRegisBoostrap from './Components/ReactRegisBoostrap/ReactRegisBoostrap';
import ReactLoginBoo from './Components/ReactLoginBoo/ReactLoginBoo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main'



function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main />,
      children: [
        {
          path: '/',
          element: <ReactRegisBoostrap />
        }, {
          path: '/register',
          element: <ReactRegisBoostrap />
        },
        {
          path: '/login',
          element: <ReactLoginBoo />
        }
      ]
    }
  ])

  return (
    <div className="App">

      <RouterProvider router={router} />


    </div>
  );
}

export default App;
