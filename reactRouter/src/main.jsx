import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header, Footer, About, Contact, Price, Home, User, Error } from './components'
import Layout from './components/Layout.jsx'

import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "pricing",
        element: <Price />
      },
      {
        path: "user",
        element: <User />
      },
      {
        path: "user/:id",
        element: <User />
      }
    ]
  }
]);
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='pricing' element={<Price />} />
//       <Route path='user' element={<User />}>
//         <Route path=':userid' element={<User />}/>
//       </Route>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
