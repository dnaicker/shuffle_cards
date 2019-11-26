import { SetStage } from './Stage.mjs';

export function SetCanvas() {
	const canvas = document.getElementById("mycanvas");

	let _w = window.innerWidth;
	let _h = window.innerHeight;

	const renderer = new PIXI.Renderer({
		view: canvas,
		width: _w,
		height: _h,
		resolution: window.devicePixelRatio,
		autoDensity: true
	})

	window.addEventListener('resize', resize);

	function resize() {
		_w = window.innerWidth;
		_h = window.innerHeight;
		renderer.resize(_w, _h)
	}

	const stage = SetStage(renderer);

	// return renderer and stage
	return { renderer, stage };
}