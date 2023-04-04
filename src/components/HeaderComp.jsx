import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';

const HeaderComp = () => {
	return (
		<div>
			<Navbar />
			<h3>Carausel</h3>
			<Carousel />
		</div>
	);
};

export default HeaderComp;
