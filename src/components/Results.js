import React from "react";
import Money from "./Money";

class Results extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			married: false,
		};
		console.log(this.props.formData);
	}

	render = () => (
		<div>
			<p>
				The US government{" "}
				<a
					href="https://www.reuters.com/article/us-health-coronavirus-usa-congress/u-s-congress-negotiators-reach-deal-on-2-trillion-coronavirus-aid-package-idUSKBN21B18D"
					target="_blank"
					rel="noopener noreferrer"
				>
					has reached a deal
				</a>
				, and final relief payment amounts and information on how Americans will
				receive the money is expected to be released in the next few days. The
				amount in the red box for the CARES Act will be closest to the final
				amount. In the meantime:
			</p>
			{getCARES(this.props.formData)}
			<br />
			{getTRWF(this.props.formData)}
			<br />
			<p>
				Learn about the math and the details of each bill with the links above.
				Details on how to get the money will be added in the coming days as they
				are released.
			</p>
			<p>
				More visual details on how these numbers are determined coming soon!
			</p>
			<h4>Share this site: tannerkrewson.com/coronacalc</h4>
		</div>
	);
}

function getCARES(formData) {
	const baseAmount = formData.married ? 2400 : 1200;
	const childAmount = formData.dependants * 500;

	const finalAmount = baseAmount + childAmount - getCARESPhaseout(formData);

	return (
		<div>
			Under the Senate Republicans' original{" "}
			<a
				href="https://taxfoundation.org/cares-act-senate-coronavirus-bill-economic-relief-plan/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Coronavirus Aid, Relief and Economic Security (CARES) Act
			</a>
			, you would receive:
			<br />
			<Money amount={finalAmount} color={"FireBrick"} />
		</div>
	);
}

function getCARESPhaseout(formData) {
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

	const income = formData.income || 0;
	const spouseIncome = formData.married ? formData.spouseIncome : 0;
	const totalIncome = income + spouseIncome;

	const additionalIncome = getAdditionalIncome(totalIncome, phaseoutStart);

	return Math.floor(additionalIncome / 100) * 5;
}

function getTRWF(formData) {
	const baseAmount = formData.married ? 3000 : 1500;
	const childAmount = formData.dependants * 1500;

	const finalAmount =
		(baseAmount + childAmount) *
		(1 - getTRWFPhaseoutReducationPercent(formData));

	return (
		<div>
			Under the House Democrats' original{" "}
			<a
				href="https://taxfoundation.org/take-responsiblity-workers-families-act-analysis/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Take Responsibility for Workers and Families Act
			</a>
			, you would receive:
			<br />
			<Money amount={finalAmount} color={"RoyalBlue"} />
		</div>
	);
}

function getTRWFPhaseoutReducationPercent(formData) {
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

	const income = formData.income || 0;
	const spouseIncome = formData.married ? formData.spouseIncome : 0;
	const totalIncome = income + spouseIncome;

	const additionalIncome = getAdditionalIncome(totalIncome, phaseoutStart);
	return additionalIncome / (phaseoutStart / 2);
}

function getAdditionalIncome(income, phaseoutStart) {
	const additionalIncome = income - phaseoutStart;
	if (additionalIncome < 0) return 0;
	return additionalIncome;
}

export default Results;
