import React from "react";
import { InputNumber, Button } from "antd";

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
			<h3>
				<h3>{this.props.question || "How much did you make in 2019?"}</h3>
			</h3>
			<div>
				<InputNumber
					name="income"
					min={0}
					max={9999999999}
					formatter={(value) =>
						`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
					}
					parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
					value={this.state.income}
					onChange={this.handleInputChange.bind(this)}
					style={{ width: "12em" }}
				/>
			</div>
			<br />
			<Button onClick={this.props.onNext}>Next</Button>
		</div>
	);
}

export default QuestionIncome;
