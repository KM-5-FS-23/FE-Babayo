import React from 'react';
import './components.css';

function Navbar() {
	return (
		<div className="navbar bg-accent">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">BABAYO</a>
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
					<li>
						<a>Workshop</a>
					</li>
				</ul>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a>Daftar</a>
					</li>
					<li>
						<a className="btn btn-sm btn-secondary">Masuk</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
