import React from "react";
import logo from "../assets/quiz-logo.png";
export default function Header() {
	return (
		<header>
			<img
				src={logo}
				alt="colorful clipboard logo"
			/>
			<h1>Quiz APP</h1>
		</header>
	);
}
