import React from "react";
import { InputNumber, Button } from "antd";

class QuestionDep extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showInputNumber: false,
			dependants: 0,
		};
	}

	async handleInputChange(dependants) {
		await this.setState({
			dependants,
		});
	}

	async buttonNext(dependants) {
		await this.handleInputChange(dependants);
		this.next();
	}

	next() {
		this.props.onNext({ dependants: this.state.dependants });
	}

	showInputNumber() {
		this.setState({ showInputNumber: true });
	}

	handleFocus = (event) => event.target.select();

	render = () => (
		<div>
			<h3>How many dependants do you have?</h3>
			{!this.state.showInputNumber && (
				<div>
					<Button onClick={() => this.next(0)}>None</Button>{" "}
					<Button shape="circle" onClick={() => this.buttonNext(1)}>
						1
					</Button>{" "}
					<Button shape="circle" onClick={() => this.buttonNext(2)}>
						2
					</Button>{" "}
					<Button shape="circle" onClick={() => this.buttonNext(3)}>
						3
					</Button>{" "}
					<Button shape="circle" onClick={() => this.buttonNext(4)}>
						4
					</Button>{" "}
					<Button shape="circle" onClick={() => this.buttonNext(5)}>
						5
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
						onPressEnter={this.next.bind(this)}
						autoFocus={true}
						onFocus={this.handleFocus}
					/>
					<br />
					<br />
					<Button onClick={this.next.bind(this)}>Next</Button>
				</div>
			)}
		</div>
	);
}

export default QuestionDep;
