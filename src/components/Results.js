import React from "react";
import { Button } from "antd";

class Results extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			married: false,
		};
		console.log(this.props.formData);
	}

	render = () => {
		const baseAmount = this.props.formData.married ? 2400 : 1200;
		const childAmount = this.props.formData.dependants * 500;

		const finalAmount =
			baseAmount + childAmount - getPhaseout(this.props.formData);

		if (finalAmount <= 0) return <div>You do not qualify :(</div>;
		return <div>You will receive ${finalAmount}!</div>;
	};
}

function getPhaseout(formData) {
	const isSingle = !formData.married && formData.dependants === 0;
	const isHeadOfHousehold = !formData.married && formData.dependants > 0;

	let phaseoutStart;
	if (isSingle) {
		phaseoutStart = 75000;
	} else if (isHeadOfHousehold) {
		phaseoutStart = 112500;
	} else {
		phaseoutStart = 150000;
	}

	const income = formData.income;
	const spouseIncome = formData.spouseIncome || 0;
	const totalIncome = income + spouseIncome;

	const additionalIncome = getAdditionalIncome(totalIncome, phaseoutStart);

	return Math.floor(additionalIncome / 100) * 5;
}

function getAdditionalIncome(income, phaseoutStart) {
	const additionalIncome = income - phaseoutStart;
	if (additionalIncome < 0) return 0;
	return additionalIncome;
}

export default Results;
