import React from "react";
import { Button } from "antd";

import QuestionSpouseIncome from "./QuestionSpouseIncome";

class QuestionMarried extends React.Component {
	next(married) {
		this.props.onNext({ married });
	}

	render = () => (
		<div>
			<h3>Are you married?</h3>
			<div>
				<Button onClick={() => this.next(true)}>Yes</Button>{" "}
				<Button onClick={() => this.next(false)}>No</Button>
			</div>
		</div>
	);
}

export default QuestionMarried;
