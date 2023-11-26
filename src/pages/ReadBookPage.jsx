import React from 'react';
import Navbar from '../components/navbar';
import Footer2 from '../components/Footer2';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function ReadBookPage() {
	return (
		<div>
			<Navbar />
			<div
				className="flex-col h-screen pt-20"
				id="read-content"
			>
				<div className="flex justify-between">
					<div className="flex-col">
						<h1>Laskar Pelangi</h1>
						<p>2005</p>
					</div>
					<div className="flex-col text-right">
						<h1>Waktu Membaca</h1>
						<p>00:00:00</p>
					</div>
				</div>
				<iframe
					src="https://drive.google.com/file/d/1nA62-2cS1Hp_GmYSiF1Jl6y-QpjuLUvE/preview"
					className="w-full aspect-video py-6"
				></iframe>
				<div className="flex justify-center">
					<Link
						to="/detail-books"
						className="btn btn-secondary"
					>
						Selesai Membaca
					</Link>
				</div>
				<Footer2 />
			</div>
		</div>
	);
}

export default ReadBookPage;
