import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar.component";

const Home = () => {
	return (
		<div>
			<SearchBar />
			<button>
				<Link to="/search">button</Link>
			</button>
		</div>
	);
};

export default Home;
