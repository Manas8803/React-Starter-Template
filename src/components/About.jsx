import { Link } from "react-router-dom";

export default function About() {
	return (
		<>
			<div style={{ color: "red" }}>About Page</div>
			<br />
			<br />
			<Link to={"/"}>Root</Link>
			<br />
			<br />
			<Link to={"/home"}>Home</Link>
		</>
	);
}
