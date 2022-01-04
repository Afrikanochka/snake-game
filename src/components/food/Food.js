import React from 'react';
import { FoodStyled } from './FoodStyled';

const Food = (props) => {
    return (
        <FoodStyled top={`${props.foodDot[0]}rem`} left={`${props.foodDot[1]}rem`}  />
    );
}

export default Food;