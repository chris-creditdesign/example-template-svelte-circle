import { mount } from "svelte";
import App from './App.svelte';

// Anything the end user can configure in the settings panel must
// be in this object. The separate settings.js file references
// these property names.
export const state = {
	// Note: property names starting with an underscore are reserved for use by Flourish
	radius: 10,
	stroke: 1,
	color: "#FF0000"
};

const props = $state({
	radius: state.radius,
	stroke: state.stroke,
	color: state.color
})

// Initialise the graphic
export function draw() {
	mount(App, {
		target: document.body,
		props
	});
}

// The update function is called when the user changes a state property in
// the settings panel or presentation editor. It updates elements to reflect
// the current state.
export function update() {
	if (state.radius <= 0) throw new Error("Radius must be positive");

	props.radius = state.radius;
	props.stroke = state.stroke;
	props.color = state.color;
}
