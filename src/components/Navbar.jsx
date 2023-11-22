import React from 'react';
import './components.css';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom';

function Navbar() {
	return (
		<div className="navbar bg-accent">
			<div className="flex-1">
				<NavLink
					to="/"
					className="btn btn-ghost text-xl"
				>
					BABAYO
				</NavLink>
				<ul className="menu menu-horizontal px-1">
					<li>
						<a>Beranda</a>
					</li>
					<li>
						<a>Bacaan Harian</a>
					</li>
					<li>
						<a>Koleksi Buku</a>
					</li>
					<li>
						<a>Favorit</a>
					</li>
				</ul>
			</div>
			<div className="flex-none mr-3">
				<ul className="menu menu-horizontal">
					<li>
						<Link to="/register">Daftar</Link>
					</li>
					<li>
						<Link
							to="/login"
							className="btn btn-sm btn-secondary"
						>
							Masuk
						</Link>
					</li>
				</ul>
				{/* <div className="avatar">
					<span className="menu text-xl">Paki</span>
					<div className="w-11 rounded-full">
						<img src="https://i.imgur.com/SqHE1Ct.jpg" />
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default Navbar;
