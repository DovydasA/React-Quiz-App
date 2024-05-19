import React from "react";
import quizCompleteLogo from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
import SummaryStat from "./SummaryStat";
import SummaryAnswer from "./SummaryAnswer";

export default function Summary({ userAnswers }) {
	const total = userAnswers.length;
	const skipped = userAnswers.filter(answer => answer === null).length;
	const correct = userAnswers.filter(
		(answer, index) => answer === QUESTIONS[index].answers[0]
	).length;
	const incorrect = total - skipped - correct;

	return (
		<div id="summary">
			<img
				src={quizCompleteLogo}
				alt="trophy icon with a star"
			/>
			<h2>Quiz complete!</h2>
			<div id="summary-stats">
				<SummaryStat
					number={Math.round((skipped / total) * 100)}
					text="Skipped"
				/>
				<SummaryStat
					number={Math.round((correct / total) * 100)}
					text="Correct"
				/>
				<SummaryStat
					number={Math.round((incorrect / total) * 100)}
					text="Incorrect"
				/>
			</div>
			<ol>
				{userAnswers.map((answer, index) => (
					<SummaryAnswer
						key={index}
						questionNumber={index + 1}
						question={QUESTIONS[index].text}
						answer={answer}
						isCorrect={answer === QUESTIONS[index].answers[0]}
					/>
				))}
			</ol>
		</div>
	);
}
