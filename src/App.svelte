<script>
	import { Tween } from "svelte/motion";
	import { cubicInOut } from "svelte/easing";
	let { radius, stroke, color } = $props();

	let width = $state(500); // Default values
	let height = $state(500);

	let tweenedRadius = new Tween(radius, {
		duration: 400,
		easing: cubicInOut,
	});

	let tweenedStroke = new Tween(stroke, {
		duration: 400,
		easing: cubicInOut,
	});

	$effect(() => {
		tweenedRadius.target = radius;
		tweenedStroke.target = stroke;
	});
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<svg {width} {height}>
	<circle
		cx={width / 2}
		cy={height / 2}
		r={tweenedRadius.current}
		fill={color}
		stroke="black"
		stroke-width={tweenedStroke.current}
	></circle>
</svg>
