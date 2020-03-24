import React from "react";
import { InputNumber } from "antd";

class QuestionIncome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			income: 0,
		};
	}

	handleInputChange(value) {
		const newState = {
			income: value,
		};
		this.setState(newState);
		this.props.onChange(newState);
	}

	render = () => (
		<div>
			<div>How much did you make in 2019?</div>
			<div>
				<InputNumber
					name="income"
					min={0}
					max={9999999999}
					value={this.state.income}
					onChange={this.handleInputChange.bind(this)}
				/>
			</div>
		</div>
	);
}

export default QuestionIncome;
