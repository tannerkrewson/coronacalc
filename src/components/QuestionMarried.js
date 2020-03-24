import React from "react";
import { Button } from "antd";

import QuestionSpouseIncome from "./QuestionSpouseIncome";

class QuestionMarried extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			married: false,
		};
	}

	handleInputChange(value) {
		const isMarried = value === "yes";
		const newState = {
			married: isMarried,
		};
		this.setState(newState);
		this.props.onChange(newState);
		this.props.onNext();
	}

	render = () => (
		<div>
			<div>Are you married?</div>
			<div>
				<Button onClick={() => this.handleInputChange("yes")}>Yes</Button>
				<Button onClick={() => this.handleInputChange("no")}>No</Button>
			</div>
		</div>
	);
}

export default QuestionMarried;
