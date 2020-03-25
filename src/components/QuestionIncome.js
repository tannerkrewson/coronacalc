import React from "react";
import { InputNumber, Button } from "antd";

class QuestionIncome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			income: this.props.formData.income,
		};
	}

	handleInputChange(income) {
		this.setState({ income });
	}

	next() {
		this.props.onNext({ income: this.state.income });
	}

	handleFocus = (event) => event.target.select();

	render = () => (
		<div>
			<h3>{this.props.question || "How much did you make in 2019?"}</h3>

			<div>
				<InputNumber
					name="income"
					min={0}
					max={9999999999}
					formatter={(value) =>
						`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
					}
					value={this.state.income}
					parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
					onChange={this.handleInputChange.bind(this)}
					onPressEnter={this.next.bind(this)}
					style={{ width: "12em" }}
					autoFocus={true}
					onFocus={this.handleFocus}
				/>
			</div>
			<br />
			<Button onClick={this.next.bind(this)}>Next</Button>
		</div>
	);
}

export default QuestionIncome;
