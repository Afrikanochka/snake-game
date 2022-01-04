import React, { useState, useEffect} from 'react';
import Food from './components/food/Food';
import Snake from './components/snake/Snake';

import styled from 'styled-components';
import snake from './images/snake.gif';
import Container from './components/container/Container';

const SnakeImage = styled.div`
	background-image: url(${snake});
	background-repeat: no-repeat;
	background-size: cover;
	height: 140px;
	width: 140px;
`;

const CoinImage = styled.div`
	
	background-repeat: no-repeat;
	background-size: cover;
	height: 20px;
	width: 20px;
`;

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: darkslategrey;
`;

const Box = styled.div`
	display: flex;
`;

const Content = styled.span`
	font-size: 1em;
	text-align: center;
	color: darkslategrey;
`;

const Wrapper = styled.section`
	position: relative;
	background: papayawhip;
`;

const Button = styled.button`
	color: teal;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid Teal;
	border-radius: 3px;
	float: right;
`;

const getRandomCoordinates = () => {
	let min = 1;
	let max = 28;
	let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
	let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
	return [x, y];
};

const App = () => {

  const [snakeDots, setSnakeDots] = useState([[0, 0], [0, 2], [0, 4], [0, 6]]);
	const [foodDot, setFoodDot] = useState(getRandomCoordinates());
	const [direction, setDirection] = useState('RIGHT');
	const [alive, setAlive] = useState(false);
	const [speed, setSpeed] = useState(300);
	const [name, setName] = useState('Play');
	const [point, setPoint] = useState(0);

  useEffect(() => {
		document.onkeydown = onKeyDown;
		checkIfOutOfBorders();
		checkIfEat();

		const run = setInterval(() => {
			moveSnake(alive);
		}, speed);
		return () => clearInterval(run);
	});

	function onKeyDown(e) {
		// console.log(e.keyCode);
		switch (e.keyCode) {
			case 38:
				setDirection('UP');
				break;
			case 40:
				setDirection('DOWN');
				break;
			case 37:
				setDirection('LEFT');
				break;
			case 39:
				setDirection('RIGHT');
				break;
			default:
				break;
		}
	}

	function moveSnake(state) {
		if (state === true) {
			let dots = [...snakeDots];
			let head = dots[dots.length - 1];

			switch (direction) {
				case 'RIGHT':
					head = [head[0], head[1] + 2];
					break;
				case 'LEFT':
					head = [head[0], head[1] - 2];
					break;
				case 'DOWN':
					head = [head[0] + 2, head[1]];
					break;
				case 'UP':
					head = [head[0] - 2, head[1]];
					break;
				default:
					break;
			}
			dots.push(head);
			dots.shift();
			setSnakeDots(dots);
		}
	}

	function checkIfEat() {
		let head = snakeDots[snakeDots.length - 1];
		let food = foodDot;
		if (head[0] === food[0] && head[1] === food[1]) {
			setFoodDot(getRandomCoordinates());
			enlargeSnake();
			increaseSpeed();
			setPoint(point + 10);
		}
	}

	function onGameOver() {
		setAlive(false);
		setSnakeDots([[0, 0], [0, 2], [0, 4], [0, 6]]);
		setFoodDot([10, 10]);
		setDirection('RIGHT');
	}

	function checkIfOutOfBorders() {
		let head = snakeDots[snakeDots.length - 1];
		if (head[0] === 30 || head[1] === 30 || head[0] < 0 || head[1] < 0) {
			onGameOver();
		}
	}

	function enlargeSnake() {
		let newSnake = [snakeDots[snakeDots.length - 1], ...snakeDots];
		setSnakeDots(newSnake);
	}

	function increaseSpeed() {
		if (speed > 10) {
			setSpeed(speed - 10);
		}
	}

	function rePlay() {
		setDirection('RIGHT');
		setName('Play again');
		setPoint(0);
		setAlive(true);
	}

  return (
    <Container>
	<SnakeImage />
	<Title>Snake game with React</Title>
			{alive ? (
				<div>
					<Box>
						<Content>{point} </Content>
						<CoinImage />
					</Box>
					<Wrapper>
						<Snake snakeDots={snakeDots} />
						<Food foodDot={foodDot} />
					</Wrapper>
				</div>
			) : (
				<div>
					<Box>
						<Content>Your points : {point} </Content>
						<CoinImage />
					</Box>
					<Button onClick={rePlay}>{name}</Button>
				</div>
			)}
	</Container>
  );
}

export default App;
