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

	handleInputChange(dependants) {
		this.setState({
			dependants,
		});
	}

	next(dependants) {
		this.props.onNext({ dependants });
	}

	showInputNumber() {
		this.setState({ showInputNumber: true });
	}

	render = () => (
		<div>
			<h3>How many dependants do you have?</h3>
			{!this.state.showInputNumber && (
				<div>
					<Button onClick={() => this.next(0)}>None</Button>{" "}
					<Button shape="circle" onClick={() => this.next(1)}>
						1
					</Button>{" "}
					<Button shape="circle" onClick={() => this.next(2)}>
						2
					</Button>{" "}
					<Button shape="circle" onClick={() => this.next(3)}>
						3
					</Button>{" "}
					<Button shape="circle" onClick={() => this.next(4)}>
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
						onPressEnter={this.props.onNext}
						autoFocus={true}
					/>
					<br />
					<Button onClick={this.next.bind(this)}>Next</Button>
				</div>
			)}
		</div>
	);
}

export default QuestionDep;
