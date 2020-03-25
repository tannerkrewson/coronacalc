import React from "react";

import QuestionIncome from "./QuestionIncome";

class QuestionSpouseIncome extends React.Component {
	onChange({ income }) {
		this.props.onChange({ spouseIncome: income });
	}
	onNext() {
		this.props.onNext();
	}

	render = () => (
		<QuestionIncome
			onChange={this.onChange.bind(this)}
			onNext={this.onNext.bind(this)}
			question="How much did your spouse make in 2019?"
		/>
	);
}

export default QuestionSpouseIncome;
