import React from "react";
import { Card } from "antd";
import { MemoryRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Calculator from "./components/Calculator";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render = () => (
		<Router>
			<div className="App">
				<Header />
				<Card>
					<Switch>
						<Route exact path="/" component={Intro} />
						<Route path="/calc" component={Calculator} />
					</Switch>
				</Card>

				<footer>
					Coronavirus Check Calculator by{" "}
					<a
						href="https://www.tannerkrewson.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Tanner Krewson
					</a>
					<br />
					<a
						href="https://github.com/tannerkrewson/coronavirus-check-calculator"
						target="_blank"
						rel="noopener noreferrer"
					>
						View on GitHub
					</a>
				</footer>
			</div>
		</Router>
	);
}

export default App;
