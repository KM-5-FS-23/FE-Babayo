import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDailyByID } from '../redux/actions/detailDailyActions';
import Navbar from '../components/navbar';
import Footer2 from '../components/Footer2';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function ReadDailyPage() {
	const { bacaan_id } = useParams();
	const dispatch = useDispatch();
	const { daily } = useSelector((state) => state.detailDaily);

	useEffect(() => {
		if (bacaan_id) {
			dispatch(getDailyByID(bacaan_id));
		}
	}, [dispatch, bacaan_id]);

	if (!daily || daily.bacaan_id !== parseInt(bacaan_id)) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Navbar />

			<div
				className="flex-col h-screen pt-20"
				id="read-content"
			>
				<div className="flex justify-between">
					<h1 className="font-semibold">{daily.judul}</h1>

					<div className="flex-col text-right font-semibold">
						<h1>Waktu Membaca</h1>
						<p>00:00:00</p>
					</div>
				</div>

				<div className="flex w-full my-12">
					<p className="text-justify">{daily.isi}</p>
				</div>

				<div className="flex justify-between">
					<button className="btn btn-primary my-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
						Tambah Favorit
					</button>
					<Link
						to="/dailys"
						className="btn btn-secondary"
					>
						Selesai Membaca
					</Link>
					<Link
						to="/discuss"
						className="btn btn-primary"
					>
						Lanjut Diskusi
					</Link>
				</div>

				<Footer2 />
			</div>
		</div>
	);
}

export default ReadDailyPage;
