import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routs } from './Routes/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="">
      <RouterProvider router={routs}></RouterProvider>
      
    </div>
  );
}

export default App;
