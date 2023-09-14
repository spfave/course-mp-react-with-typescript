import { useCallback } from "react";
import { Equal, Expect } from "../helpers/type-utils";

export const Buttons = (props: { id: string }) => {
	const onC = useCallback(() => {}, []);

	// Option 2: provide function type as generic - favor option 1
	const onClick = useCallback<(val: string) => void>(
		// Option 1: provide type inputs on function itself
		(buttonName: string) => {
			console.log(props.id, buttonName);
		},
		[props.id]
	);

	type test = Expect<Equal<typeof onClick, (buttonName: string) => void>>;

	return (
		<div>
			<button onClick={() => onClick("A")}>A</button>
			<button onClick={() => onClick("B")}>B</button>
			<button onClick={() => onClick("C")}>C</button>
		</div>
	);
};
