import React from "react";
import styled from "styled-components";
import { Switch, Route, useLocation } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header/Header.component";

import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

export const BackgroundOverlay = styled.div`
	z-index: -10;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background: rgba(255, 255, 255, 0.2);
`;

function App() {
	let location = useLocation();
	console.log(location);

	return (
		<div className="app">
			<GlobalStyle pathname={location.pathname} />
			<BackgroundOverlay />
			<Header isHome={location.pathname === "/" ? 1 : 0} />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/search" component={SearchPage} />
			</Switch>
		</div>
	);
}

export default App;
