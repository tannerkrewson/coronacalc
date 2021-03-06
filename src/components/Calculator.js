import React from "react";
import { Button } from "antd";
import { DeleteOutlined, LeftCircleOutlined } from "@ant-design/icons";
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
	async onNext(newFormData) {
		this.setState({
			formData: { ...this.state.formData, ...newFormData },
		});

		do {
			await this.setState({ questionStep: this.state.questionStep + 1 });
		} while (!this.currentQuestion().shouldAsk());
	}
	currentQuestion() {
		return this.questions[this.state.questionStep] || { question: <div></div> };
	}
	reset() {
		this.setState({ questionStep: 0 });
	}
	async back() {
		do {
			if (this.state.questionStep === 0) {
				this.props.history.push("/");
			}
			await this.setState({ questionStep: this.state.questionStep - 1 });
		} while (!this.currentQuestion().shouldAsk());
	}
	render = () => {
		const Question = this.currentQuestion().question;
		return (
			<div>
				<StepsOverview step={this.currentQuestion().overviewStep} />
				<div className="Calculator-content">
					<Question
						onNext={this.onNext.bind(this)}
						formData={this.state.formData}
					/>

					<br />
					<Button
						type="dashed"
						size="small"
						icon={<LeftCircleOutlined />}
						onClick={this.back.bind(this)}
					>
						Back
					</Button>
					{"    "}
					<Button
						type="dashed"
						size="small"
						icon={<DeleteOutlined />}
						onClick={this.reset.bind(this)}
						disabled={this.state.questionStep === 0}
					>
						Reset
					</Button>
					<br />
					<br />
					<div style={{ fontSize: ".8em" }}>
						Use the information from your 2018 tax returns, if possible. More
						details soon.
					</div>
				</div>
			</div>
		);
	};
}

export default Calculator;
