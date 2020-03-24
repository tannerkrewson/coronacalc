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
	onClickNext() {
		this.props.onNext();
	}

	render = () => (
		<div>
			<h3>How much did you make in 2019?</h3>
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
				/>
			</div>
			<br />
			<Button onClick={this.onClickNext.bind(this)}>Next</Button>
		</div>
	);
}

export default QuestionIncome;
