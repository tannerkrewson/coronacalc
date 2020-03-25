import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { DollarOutlined } from "@ant-design/icons";

const Intro = () => (
	<div style={{ textAlign: "center" }}>
		<Link to="/calc">
			<Button
				type="primary"
				shape="round"
				icon={<DollarOutlined />}
				size="large"
			>
				Calculate your Amount!
			</Button>
		</Link>
	</div>
);

export default Intro;
