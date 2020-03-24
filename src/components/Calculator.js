import React from "react";
import { Card, Button } from "antd";
import QuestionMarried from "./QuestionMarried";
import QuestionDep from "./QuestionDep";
import QuestionIncome from "./QuestionIncome";
import Results from "./Results";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 0,
			formData: { income: 0, spouseIncome: 0, married: false, dependants: 0 },
			done: false,
		};
		this.questions = [QuestionMarried, QuestionDep, QuestionIncome];
	}
	onChange(newFormData) {
		this.setState({ formData: { ...this.state.formData, ...newFormData } });
	}
	onNext(addQuestions = []) {
		console.log(addQuestions);

		this.questions = [...this.questions, ...addQuestions];

		if (this.state.step === this.questions.length - 1) {
			this.setState({ done: true });
			return;
		}
		this.setState({ step: this.state.step + 1 });
	}
	calculate() {}
	render = () => {
		const Question = this.questions[this.state.step];
		return (
			<Card>
				{!this.state.done && (
					<Question
						onChange={this.onChange.bind(this)}
						onNext={this.onNext.bind(this)}
					/>
				)}
				{this.state.done && <Results formData={this.state.formData} />}
			</Card>
		);
	};
}

export default Calculator;
