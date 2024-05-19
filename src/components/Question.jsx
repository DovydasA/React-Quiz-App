import React from "react";
import QuestionTimer from "./QuestionTimer";

function Question({ question, onSkipAnswer, answered }) {
	return (
		<div id="question">
			<QuestionTimer
				key={question}
				question={question}
				timeout={10000}
				onTimeout={onSkipAnswer}
				answered={answered}
			/>
			<h2>{question}</h2>
		</div>
	);
}

export default Question;
