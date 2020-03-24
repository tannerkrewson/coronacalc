import React from "react";
import { InputNumber, Button } from "antd";

class QuestionSpouseIncome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			spouseIncome: 0,
		};
	}

	handleInputChange(value) {
		const newState = {
			spouseIncome: value,
		};
		this.setState(newState);
		this.props.onChange(newState);
	}
	onClickNext() {
		//wrapper to prevent click event info from being sent and interfering with newQuestionst
		this.props.onNext();
	}

	render = () => (
		<div>
			<div>How much did your spouse make in 2019?</div>
			<div>
				<InputNumber
					name="income"
					min={0}
					max={9999999999}
					formatter={(value) =>
						`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
					}
					parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
					value={this.state.spouseIncome}
					onChange={this.handleInputChange.bind(this)}
				/>
			</div>
			<Button onClick={this.onClickNext.bind(this)}>Next</Button>
		</div>
	);
}

export default QuestionSpouseIncome;
