import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<div style={{ color: "green" }}>Home Page</div>
			<br />
			<br />
			<Link to={"/"}>Root</Link>
			<br />
			<br />
			<Link to={"/about"}>About</Link>
		</>
	);
}
