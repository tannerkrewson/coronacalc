import React from "react";
import { InputNumber, Button } from "antd";

class QuestionDep extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dependants: 0,
			showInputNumber: false,
		};
	}

	handleInputChange(value) {
		const newState = {
			dependants: value,
		};
		this.setState(newState);
		this.props.onChange(newState);
		this.props.onNext(null, 1);
	}

	showInputNumber() {
		this.setState({ showInputNumber: true });
	}

	render = () => (
		<div>
			<h3>How many dependants do you have?</h3>
			{!this.state.showInputNumber && (
				<div>
					<Button onClick={() => this.handleInputChange(0)}>None</Button>{" "}
					<Button shape="circle" onClick={() => this.handleInputChange(1)}>
						1
					</Button>{" "}
					<Button shape="circle" onClick={() => this.handleInputChange(2)}>
						2
					</Button>{" "}
					<Button shape="circle" onClick={() => this.handleInputChange(3)}>
						3
					</Button>{" "}
					<Button shape="circle" onClick={() => this.handleInputChange(4)}>
						4
					</Button>{" "}
					<Button onClick={() => this.showInputNumber()}>More</Button>
				</div>
			)}
			{this.state.showInputNumber && (
				<div>
					<InputNumber
						name="dependants"
						min={0}
						max={100}
						value={this.state.dependants}
						onChange={this.handleInputChange.bind(this)}
					/>
				</div>
			)}
		</div>
	);
}

export default QuestionDep;
