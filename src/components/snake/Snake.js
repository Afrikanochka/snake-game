import React from 'react';
import { SnakeStyled } from './SnakeStyled';

function Snake(props) {
	return props.snakeDots.map((snakeDot, i) => (
		<SnakeStyled key={i} top={`${snakeDot[0]}rem`} left={`${snakeDot[1]}rem`} />
	));
}

export default Snake;