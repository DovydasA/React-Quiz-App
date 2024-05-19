import React from "react";

function SummaryStat({ number, text }) {
	return (
		<p>
			<span className="number">{number}%</span>
			<span className="text">{text}</span>
		</p>
	);
}

export default SummaryStat;
