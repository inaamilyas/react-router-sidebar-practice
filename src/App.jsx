import Layout from "./Layout";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       { path: "", element: <HomePage /> },
  //       { path: "/about", element: <AboutPage /> },
  //       { path: "/contact", element: <ContactPage /> },
  //     ],
  //   },
  // ]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
export default App;
