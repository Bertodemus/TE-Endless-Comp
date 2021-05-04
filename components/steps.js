import React from "react";
import styles from "../styles/Home.module.css";

// I map over the sorted array and extract the necessary data as it is being returned
const Steps = (props) => {
	const { steps } = props;
	return steps.map((step, index) => {
		step.versionContent.sort(function (a, b) {
			return new Date(b.effectiveDate) - new Date(a.effectiveDate);
		});
		let stepStyle = "step" + (index + 1);
		let title = steps[index].versionContent[0].title;
		return (
			<div
				key={stepStyle}
				className={`${styles[stepStyle]} ${styles.styleSteps}`}
			>
				<h1>{"0" + (index + 1)}</h1>
				<h6>{title.toUpperCase()}</h6>
				<p>{steps[index].versionContent[0].body}</p>
			</div>
		);
	});
};

export default Steps;
