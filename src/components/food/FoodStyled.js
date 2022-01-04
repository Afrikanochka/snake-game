import styled from 'styled-components';
import snake from '../../images/snake.gif';

export const FoodStyled = styled.div`
    position: absolute;
	background-image: url(${snake});
	background-repeat: no-repeat;
	background-size: cover;
	background: tomato;
	height: 2rem;
	width: 2rem;
	border-radius: 50%;
	z-index: 1;
	top: ${(props) => props.top};
	left: ${(props) => props.left};
`