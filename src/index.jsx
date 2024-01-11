import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import CnnProfil from './pages/CnnProfil';
import Home from './pages/home';


const router = createBrowserRouter([
	{
		path: '/',
		element: <App/>,
		children: [
			{
				path: '/',
				element: <Home/>
			},
			{
				path: '/cnnprofil',
				element: <CnnProfil/>,
				
			},
			]
	}

  	]);

ReactDOM.createRoot(document.getElementById('root')).render(

	<React.StrictMode>
    	<RouterProvider router={router}/>
  	</React.StrictMode>
)