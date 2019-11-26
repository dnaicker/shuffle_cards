export function SetStage(renderer) {
	const stage = new PIXI.Container();
	const ticker =  new PIXI.Ticker();
	ticker.add(animate);
	ticker.start();

	function animate() {
		renderer.render(stage);
	}

	return stage;
}