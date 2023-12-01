import React from 'react';
import './components.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Books() {
	return (
		<div id="card-books">
			<div
				className="card card-compact bg-base-100"
				style={{ width: '184px' }}
			>
				<figure className="img-book">
					<Link to="/detail-books">
						<img
							src="https://i.imgur.com/gzVaE2g.png"
							alt="Laskar Pelangi"
						/>
					</Link>
				</figure>
				<div className="card-body-0">
					<h2 className="card-title">Laskar Pelangi</h2>
					<p>
						by <a href="">Andrea Hinata</a> * 105x dibaca
					</p>
				</div>
			</div>
			<div
				className="card card-compact bg-base-100"
				style={{ width: '184px' }}
			>
				<figure className="img-book">
					<Link to="/detail-books">
						<img
							src="https://i.imgur.com/gzVaE2g.png"
							alt="Laskar Pelangi"
						/>
					</Link>
				</figure>
				<div className="card-body-0">
					<h2 className="card-title">Laskar Pelangi</h2>
					<p>
						by <a href="">Andrea Hinata</a> * 105x dibaca
					</p>
				</div>
			</div>
			<div
				className="card card-compact bg-base-100"
				style={{ width: '184px' }}
			>
				<figure className="img-book">
					<Link to="/detail-books">
						<img
							src="https://i.imgur.com/gzVaE2g.png"
							alt="Laskar Pelangi"
						/>
					</Link>
				</figure>
				<div className="card-body-0">
					<h2 className="card-title">Laskar Pelangi</h2>
					<p>
						by <a href="">Andrea Hinata</a> * 105x dibaca
					</p>
				</div>
			</div>
			<div
				className="card card-compact bg-base-100"
				style={{ width: '184px' }}
			>
				<figure className="img-book">
					<Link to="/detail-books">
						<img
							src="https://i.imgur.com/gzVaE2g.png"
							alt="Laskar Pelangi"
						/>
					</Link>
				</figure>
				<div className="card-body-0">
					<h2 className="card-title">Laskar Pelangi</h2>
					<p>
						by <a href="">Andrea Hinata</a> * 105x dibaca
					</p>
				</div>
			</div>
			<div
				className="card card-compact bg-base-100"
				style={{ width: '184px' }}
			>
				<figure className="img-book">
					<Link to="/detail-books">
						<img
							src="https://i.imgur.com/gzVaE2g.png"
							alt="Laskar Pelangi"
						/>
					</Link>
				</figure>
				<div className="card-body-0">
					<h2 className="card-title">Laskar Pelangi</h2>
					<p>
						by <a href="">Andrea Hinata</a> * 105x dibaca
					</p>
				</div>
			</div>
		</div>
	);
}

export default Books;
