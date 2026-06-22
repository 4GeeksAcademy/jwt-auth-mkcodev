import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate()

	const logout = () => {
		sessionStorage.removeItem("token")
		navigate("/login")
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto d-flex gap-2">
					<Link to="/signup" className="btn btn-outline-secondary">Sign Up</Link>
					<Link to="/login" className="btn btn-primary">Login</Link>
					<button className="btn btn-danger" onClick={logout}>Logout</button>
				</div>
			</div>
		</nav>
	);
};