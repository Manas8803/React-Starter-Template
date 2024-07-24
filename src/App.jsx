import "./App.css";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Home from "./components/Home";

const router = createBrowserRouter(
	createRoutesFromElements(<Route path="/" element={<Home />} />)
);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
