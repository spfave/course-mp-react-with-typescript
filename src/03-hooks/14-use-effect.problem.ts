import { useEffect } from "react";

export const useTimeout = (timerMs: number) => {
	// Issue: passed in function is directly returning an evaluation
	// useEffect(
	// 	() =>
	// 		setTimeout(() => {
	// 			console.log("Done!");
	// 		}, timerMs),
	// 	[timerMs]
	// );

	// Correct: passed in function returns void with side effects all internal to the function body
	useEffect(() => {
		const timeout = setTimeout(() => {
			console.log("Done!");
		}, timerMs);

		return () => clearTimeout(timeout);
	}, [timerMs]);
};
