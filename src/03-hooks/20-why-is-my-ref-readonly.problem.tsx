import { useRef } from "react";

export const Component = () => {
	// const ref = useRef<string>(null); // returns RefObject where object current property is readonly
	const ref = useRef<string>(); // option 1
	// const ref = useRef<string | null>(null); // option 2

	// Why is this not allowed?
	ref.current = "Hello";

	return null;
};
