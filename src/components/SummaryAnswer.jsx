import React from "react";

function SummaryAnswer({ questionNumber, question, answer, isCorrect }) {
	const customCss =
		"user-answer " +
		(answer === null ? "skipped " : isCorrect ? "correct" : "wrong");
	return (
		<li>
			<h3>{questionNumber}</h3>
			<p className="question">{question}</p>
			<p className={customCss}>{answer ?? "-----"}</p>
		</li>
	);
}

export default SummaryAnswer;
