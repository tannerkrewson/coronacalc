import React from "react";

import QuestionIncome from "./QuestionIncome";

class QuestionSpouseIncome extends React.Component {
	onNext({ income }) {
		this.props.onNext({ spouseIncome: income });
	}

	render = () => (
		<QuestionIncome
			//that's a little hacky, huh?
			formData={{ income: this.props.formData.spouseIncome }}
			onNext={this.onNext.bind(this)}
			question="How much did your spouse make in 2019?"
		/>
	);
}

export default QuestionSpouseIncome;
