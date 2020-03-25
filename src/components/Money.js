import React from "react";
import { DollarOutlined } from "@ant-design/icons";

const Money = ({ amount, color }) => (
	<div style={{ textAlign: "center", display: "inline-block" }}>
		<h2
			style={{
				color: "white",
				backgroundColor: color,
				padding: ".1em .4em",
				margin: ".2em",
				borderRadius: "2px",
			}}
		>
			<DollarOutlined />
			{"  "}
			{Math.round(Math.max(amount, 0))}
		</h2>
	</div>
);

export default Money;
