import React from "react";
import { useState } from "react";

function Answer({
	children,
	isCorrectAnswer,
	onSelectAnswer,
	onClick,
	...props
}) {
	const [className, setClassName] = useState("");
	function handleClick() {
		onClick();
		setClassName("selected");
		setTimeout(() => {
			setClassName(isCorrectAnswer ? "correct" : "wrong");
			setTimeout(() => {
				onSelectAnswer(children);
			}, 1000);
		}, 1000);
	}

	return (
		<li className="answer">
			<button
				className={className}
				onClick={handleClick}
				{...props}>
				{children}
			</button>
		</li>
	);
}

export default Answer;
