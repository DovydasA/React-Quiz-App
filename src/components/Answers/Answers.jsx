import React, { useRef } from "react";
import Answer from "./Answer";

function Answers({ answers, onClickAnswer, handleSelectAnswer, answered }) {
	const shuffledAnswers = useRef([...answers].sort(() => Math.random() - 0.5));

	return (
		<ul id="answers">
			{shuffledAnswers.current.map(answer => (
				<Answer
					key={answer}
					isCorrectAnswer={answer === answers[0]}
					onClick={onClickAnswer}
					onSelectAnswer={handleSelectAnswer}
					disabled={answered}>
					{answer}
				</Answer>
			))}
		</ul>
	);
}

export default Answers;
