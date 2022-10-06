import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Meals from './components/Meals/Meals';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Restaurants from './components/Restaurants/Restaurants';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: 'restaurants', element: <Restaurants></Restaurants> },
        {
          path: 'Meals',

          loader: async () => {
            return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
          },
          element: <Meals></Meals>
        }

      ]
    },

    { path: 'about', element: <About></About> },
    { path: '*', element: <div>404 This route not found.</div> }


  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

      <NavBar></NavBar>
      <h1 className="text-3xl font-bold underline">This is a big header</h1>
      <p>This is a paragraph</p>
    </div>
  );
}

export default App;
