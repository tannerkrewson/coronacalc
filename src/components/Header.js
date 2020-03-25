import React from "react";

import covid19 from "../static/covid19.png";
import { ReactComponent as USFlag } from "../static/Flag_of_the_United_States.svg";

const Header = () => (
	<header className="App-header">
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				marginBottom: ".4em",
			}}
		>
			<USFlag style={{ width: "4em", height: "2em" }} />
			<div style={{ width: "1.5em" }}></div>
			<h2 style={{ marginTop: ".4em" }}>US Coronavirus Check Calculator</h2>
			<div style={{ width: "1.5em" }}></div>
			<img
				src={covid19}
				style={{ width: "3em", height: "3em", display: "inline-block" }}
			/>
		</div>
		<p>The average American will receive over $1000. How much will you get?</p>
	</header>
);

export default Header;
