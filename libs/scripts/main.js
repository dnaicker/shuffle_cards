import { CreatePlayerCard, CreateComputerCard } from './modules/Player.mjs';
import { GenerateRandomImgPathCard } from './modules/Card.mjs';
import { SetCanvas } from './modules/Canvas.mjs';

const { renderer, stage } = SetCanvas();

const card1ImgPath = GenerateRandomImgPathCard(); 
const card2ImgPath = GenerateRandomImgPathCard(); 
const card3ImgPath = GenerateRandomImgPathCard(); 
const card4ImgPath = GenerateRandomImgPathCard();

const playerCard1 = CreatePlayerCard(stage, card1ImgPath, renderer.screen.width / 4, renderer.screen.height / 2);
const playerCard2 = CreatePlayerCard(stage, card2ImgPath, renderer.screen.width / 4 + 100, renderer.screen.height / 2);
const playerCard3 = CreatePlayerCard(stage, card3ImgPath, renderer.screen.width / 4 + 200, renderer.screen.height / 2);
const playerCard4 = CreatePlayerCard(stage, card4ImgPath, renderer.screen.width / 4 + 300, renderer.screen.height / 2);	

const pcCard5 = CreateComputerCard(stage, card1ImgPath, renderer.screen.width / 4, renderer.screen.height / 2);
const pcCard6 = CreateComputerCard(stage, card2ImgPath, renderer.screen.width / 4 + 100, renderer.screen.height / 2);
const pcCard7 = CreateComputerCard(stage, card3ImgPath, renderer.screen.width / 4 + 200, renderer.screen.height / 2);
const pcCard8 = CreateComputerCard(stage, card4ImgPath, renderer.screen.width / 4 + 300, renderer.screen.height / 2);

pcCard5.y = renderer.screen.height / 4 - 70;
pcCard6.y = renderer.screen.height / 4 - 70;
pcCard7.y = renderer.screen.height / 4 - 70;
pcCard8.y = renderer.screen.height / 4 - 70;

//capture input for betting https://github.com/SebastianNette/PIXI.Input
//swap textures https://pixijs.io/examples/#/sprite/texture-swap.js
//countdown timer of 5 seconds ms pass before new text shown
//hit detection for playerCard1 and pcCard5 https://github.com/kittykatattack/bump#hit
//show clickable button for confirm
//reverse textures 
//display text results if cards aligned 3 out 5
//display button to restart: refresh window
