import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

const StepsOverview = ({ step }) => (
	<Steps size="small" current={step}>
		<Step title="Married" />
		<Step title="Dependants" />
		<Step title="Income" />
		<Step title="Results" />
	</Steps>
);

export default StepsOverview;
