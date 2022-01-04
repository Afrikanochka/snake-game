import React from 'react';
import styled from 'styled-components';

const sizes = {
	desktop: 2560,
	laptop: 1024,
	tablet: 768,
	phone: 480,
};

const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => `
    @media (max-width: ${sizes[label] / 16}em) {
      ${args}
    }
  `;
	return acc;
}, {});

const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
  align-items: center;
  height: 98vh;
  width: 100%;
  background: papayawhip;

  ${media.desktop`background: palevioletred;`}
	${media.laptop`background:  lightseagreen;`}
  ${media.tablet`background: dodgerblue;`}
	${media.phone`background: indigo;`}
`;

function Container(props) {
	return <Content>{props.children}</Content>;
}

export default Container;