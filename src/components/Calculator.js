import React from "react";
import { Card, Button } from "antd";
import QuestionMarried from "./QuestionMarried";
import QuestionDep from "./QuestionDep";
import QuestionIncome from "./QuestionIncome";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 0,
			formData: {},
		};
		this.questions = [QuestionMarried, QuestionDep, QuestionIncome];
	}
	onChange(newState) {
		this.setState({ ...this.state, ...newState });
	}
	onNext(addQuestions = []) {
		console.log(addQuestions);

		this.questions = [...this.questions, ...addQuestions];

		if (this.state.step === this.questions.length - 1) {
			alert("done");
			return;
		}
		this.setState({ step: this.state.step + 1 });
	}
	calculate() {}
	render = () => {
		const Question = this.questions[this.state.step];
		return (
			<Card>
				<Question
					onChange={this.onChange.bind(this)}
					onNext={this.onNext.bind(this)}
				/>
			</Card>
		);
	};
}

export default Calculator;
