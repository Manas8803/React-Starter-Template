import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Root from "./components/Root";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="" element={<Root />} />
			<Route path="home" element={<Home />} />
			<Route path="about" element={<About />} />
		</>
	)
);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
