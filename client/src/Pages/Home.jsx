import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Component/Card';
import CardHome from '../Component/CardHome';
import SmallCard from '../Component/SmallCard';

const Home = () => {
	const [detail, setDetail] = useState([]);
	useEffect(() => {
		// fetch("http://localhost:4000/")
		fetch('https://pb-proj-8.onrender.com/')
			.then((res) => res.json())
			.then((res) => setDetail(res));
	}, []);
	console.log(detail);
	return (
		<div>
			<div className="Home">
				<div className="home__container">
					<div className="home__first">
						<Link to="/Technology">
							{' '}
							<img src={'https://wallpapercave.com/dwp1x/wp11643803.jpg'} alt="not found" />
						</Link>
					</div>
					<div className="home_right_container">
						<div className="home__sec">
							<Link to="/Bollywood">
								{' '}
								<img src={'https://wallpapercave.com/wp/wp12100030.jpg'} alt="not found" />
							</Link>
						</div>

						<div className="home__thir">
							<Link to="/Hollywood">
								{' '}
								<img src={'https://wallpapercave.com/wp/wp12100195.png'} alt="not found" />
							</Link>
						</div>
					</div>
				</div>

				<h1 style={{ marginTop: '40px' }}>The Latest</h1>
				<hr style={{ width: '200px', thickness: '20px' }} />
				<div className="home__left left1">
					{detail
						.filter((article) => {
							return article.category === 'Bollywood';
						})
						.map((item) => (
							<CardHome key={item.id} articleid={item.id} imgUrl={item.img} title={item.title} description={item.description.slice(0, 200)} author={item.author} />
						))}
				</div>
				<div className="home__left left1">
					{detail
						.filter((article) => {
							return article.category === 'Technology';
						})
						.map((item) => (
							<CardHome key={item.id} articleid={item.id} imgUrl={item.img} title={item.title} description={item.description.slice(0, 200)} author={item.author} />
						))}
				</div>
				<div className="home__left left1">
					{detail
						.filter((article) => {
							return article.category === 'Food';
						})
						.map((item) => (
							<CardHome key={item.id} articleid={item.id} imgUrl={item.img} title={item.title} description={item.description.slice(0, 200)} author={item.author} />
						))}
				</div>
				<h1 style={{ marginTop: '40px', display: 'inline-block' }}>Latest Articles</h1>

				<h1 className="Top">Top Posts</h1>
				<hr style={{ width: '200px', thickness: '20px' }} />

				<div className="rightbar2">
					{detail
						.filter((article) => {
							return article.category === 'Bollywood';
						})
						.map((item) => (
							<Card key={item.id} articleid={item.id} imgUrl={item.img} title={item.title} description={item.description.slice(0, 200)} author={item.author} />
						))}
				</div>
				<div className="sidebar2">
					{detail
						.filter((article) => {
							return article.category === 'Technology';
						})
						.map((item) => (
							<SmallCard key={item.id} articleid={item.id} imgUrl={item.img} description={item.description.slice(0, 200)} title={item.title.slice(0, 25)} author={item.author} />
						))}

					<div className="advertisement">
						<p>Advertisement</p>
					</div>
				</div>
				<h1 style={{ marginTop: '40px', display: 'inline-block' }}>Latest Stories</h1>
				<hr />

				<div className="home__left">
					{detail
						.filter((article) => {
							return article.category === 'Travel';
						})
						.map((item) => (
							<CardHome key={item.id} articleid={item.id} imgUrl={item.img} title={item.title} description={item.description.slice(0, 200)} author={item.author} />
						))}
				</div>

				<div className="home__left">
					{detail
						.filter((article) => {
							return article.category === 'Food';
						})
						.map((item) => (
							<CardHome key={item.id} articleid={item.id} imgUrl={item.img} title={item.title} description={item.description.slice(0, 200)} author={item.author} />
						))}
				</div>

				<div className="home__left">
					{detail
						.filter((article) => {
							return article.category === 'Bollywood';
						})
						.map((item) => (
							<CardHome key={item.id} articleid={item.id} imgUrl={item.img} title={item.title} description={item.description.slice(0, 200)} author={item.author} />
						))}
				</div>
			</div>
		</div>
	);
};

export default Home;
