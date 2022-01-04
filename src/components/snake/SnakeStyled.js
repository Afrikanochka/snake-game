import styled from 'styled-components';

export const SnakeStyled = styled.div`
position: absolute;
	height: 2rem;
	width: 2rem;
	background: mediumseagreen;
	z-index: 2;
	top: ${(props) => props.top};
	left: ${(props) => props.left};
`