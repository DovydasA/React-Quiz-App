import React, { useState, useCallback, useRef, useEffect } from "react";
import QUESTIONS from "../questions";
import Summary from "./Summary";
import Question from "./Question";
import Answers from "./Answers/Answers";

export default function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);
	const [answered, setAnswered] = useState(false);
	const currentQuestionIndex = userAnswers.length;
	const quizIsComplete = currentQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
		setUserAnswers(prevAnswers => [...prevAnswers, answer]);
		setAnswered(false);
	}, []);

	const handleSkipAnswer = useCallback(() => {
		if (!answered) {
			handleSelectAnswer(null);
		}
	}, [handleSelectAnswer]);

	function handleClickAnswer() {
		setAnswered(true);
	}

	return !quizIsComplete ? (
		<div
			id="quiz"
			key={currentQuestionIndex}>
			<Question
				question={QUESTIONS[currentQuestionIndex].text}
				onSkipAnswer={handleSkipAnswer}
				answered={answered}
			/>
			<p>{QUESTIONS[currentQuestionIndex].answers[0]}</p>
			<Answers
				answers={QUESTIONS[currentQuestionIndex].answers}
				onClickAnswer={handleClickAnswer}
				handleSelectAnswer={handleSelectAnswer}
				answered={answered}
			/>
		</div>
	) : (
		<Summary userAnswers={userAnswers} />
	);
}
