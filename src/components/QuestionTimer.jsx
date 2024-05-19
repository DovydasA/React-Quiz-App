import React, { useEffect, useState } from "react";

const STEP = 500;

function QuestionTimer({ timeout, onTimeout, answered }) {
	const [remainingTime, setRemainingTime] = useState(timeout);

	useEffect(() => {
		const timeoutId = setTimeout(onTimeout, timeout + STEP);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [timeout, onTimeout, answered]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setRemainingTime(prevTime => {
				return prevTime - STEP;
			});
		}, STEP);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<progress
			value={remainingTime}
			max={timeout}
			className={answered ? "answered" : undefined}>
			{remainingTime}
		</progress>
	);
}

export default QuestionTimer;
