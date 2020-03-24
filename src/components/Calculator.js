import React from "react";
import { Card, Button } from "antd";
import QuestionMarried from "./QuestionMarried";
import QuestionDep from "./QuestionDep";
import QuestionIncome from "./QuestionIncome";
import QuestionSpouseIncome from "./QuestionSpouseIncome";
import Results from "./Results";
import StepsOverview from "./StepsOverview";

import "./Calculator.css";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			questionStep: 0,
			formData: { income: 0, spouseIncome: 0, married: false, dependants: 0 },
		};
		this.questions = [
			{ question: QuestionMarried, overviewStep: 0, shouldAsk: () => true },
			{ question: QuestionDep, overviewStep: 1, shouldAsk: () => true },
			{ question: QuestionIncome, overviewStep: 2, shouldAsk: () => true },
			{
				question: QuestionSpouseIncome,
				overviewStep: 2,
				shouldAsk: () => this.state.formData.married,
			},
			{
				question: Results,
				overviewStep: 3,
				shouldAsk: () => true,
			},
		];
	}
	onChange(newFormData) {
		this.setState({
			formData: { ...this.state.formData, ...newFormData },
		});
	}
	async onNext() {
		do {
			await this.setState({ questionStep: this.state.questionStep + 1 });
		} while (!this.currentQuestion().shouldAsk());
	}
	currentQuestion() {
		return this.questions[this.state.questionStep] || { question: <div></div> };
	}
	render = () => {
		const Question = this.currentQuestion().question;
		return (
			<Card>
				<StepsOverview step={this.currentQuestion().overviewStep} />
				<div className="Calculator-content">
					<Question
						onChange={this.onChange.bind(this)}
						onNext={this.onNext.bind(this)}
						formData={this.state.formData}
					/>
				</div>
			</Card>
		);
	};
}

export default Calculator;
