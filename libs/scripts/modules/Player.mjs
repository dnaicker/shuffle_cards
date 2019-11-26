export function CreatePlayerCard(stage, img_filepath, x_position, y_position) {
	const texture = PIXI.Texture.from(img_filepath);
	const sprite = new PIXI.Sprite(texture);

	sprite.x =  x_position;
	sprite.y =  y_position;	
	sprite.anchor.x = 0.5;
	sprite.anchor.y = 0.5;
	sprite.interactive = true;
	sprite.buttonMode = true;
	sprite.on('mousedown', onDragStart)
		.on('touchstart', onDragStart)
		// events for drag end
		.on('mouseup', onDragEnd)
		.on('mouseupoutside', onDragEnd)
		.on('touchend', onDragEnd)
		.on('touchendoutside', onDragEnd)
		// events for drag move
		.on('mousemove', onDragMove)
		.on('touchmove', onDragMove);
	
	stage.addChild(sprite);
	
	return sprite;
}

export function CreateComputerCard(stage, img_filepath, x_position, y_position) {
	const texture = PIXI.Texture.from(img_filepath);
	const sprite = new PIXI.Sprite(texture);

	sprite.x =  x_position;
	sprite.y =  y_position;	
	sprite.anchor.x = 0.5;
	sprite.anchor.y = 0.5;
	sprite.interactive = false;
	sprite.buttonMode = false;
	
	stage.addChild(sprite);
	
	return sprite;
}

function onDragStart(event)
{
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
}

function onDragEnd()
{
    this.alpha = 1;

    this.dragging = false;

    this.data = null;
}

function onDragMove()
{
    if (this.dragging)
    {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
    }
}