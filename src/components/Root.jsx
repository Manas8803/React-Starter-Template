import { Link } from "react-router-dom";

export default function Root() {
	return (
		<>
			<div style={{ color: "blue" }}>Root Page</div>
			<br />
			<br />
			<Link to={"/home"}>Home</Link>
			<br />
			<br />
			<Link to={"/about"}>About</Link>
		</>
	);
}
