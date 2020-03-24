import React from "react";
import { Card, Button } from "antd";
import QuestionDep from "./QuestionDep";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 0,
		};
		this.questions = [QuestionDep];
	}
	render = () => {
		const Question = this.questions[this.state.step];
		return (
			<Card>
				<Question />
				<Button>Back</Button>
				<Button>Next</Button>
			</Card>
		);
	};
}

export default Calculator;
