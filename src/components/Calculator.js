import React from "react";
import { Card, Button } from "antd";
import QuestionDep from "./QuestionDep";
import QuestionIncome from "./QuestionIncome";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 0,
			formData: {},
		};
		this.questions = [QuestionDep, QuestionIncome];
	}
	onChange(newState) {
		this.setState({ ...this.state, ...newState });
	}
	next() {
		if (this.state.step < this.questions.length - 1) {
			this.setState({ step: this.state.step + 1 });
		}
	}

	back() {
		if (this.state.step > 0) {
			this.setState({ step: this.state.step - 1 });
		}
	}
	calculate() {}
	render = () => {
		const Question = this.questions[this.state.step];
		return (
			<Card>
				<Question onChange={this.onChange.bind(this)} />
				{this.state.step > 0 && (
					<Button onClick={this.back.bind(this)}>Back</Button>
				)}
				{this.state.step < this.questions.length - 1 && (
					<Button onClick={this.next.bind(this)}>Next</Button>
				)}
				{this.state.step === this.questions.length - 1 && (
					<Button onClick={this.calculate.bind(this)}>Calculate</Button>
				)}
			</Card>
		);
	};
}

export default Calculator;
