import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDailyByID } from '../redux/actions/detailDailyActions';
import { addFavoriteDaily } from '../redux/actions/dailyActions';
import Navbar from '../components/navbar';
import Footer2 from '../components/Footer2';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function ReadDailyPage() {
	const { bacaan_id } = useParams();
	const dispatch = useDispatch();
	const { daily, loading, error } = useSelector((state) => state.detailDaily);
	const userId = localStorage.getItem('userId');

	useEffect(() => {
		if (bacaan_id) {
			dispatch(getDailyByID(bacaan_id));
		}
	}, [dispatch, bacaan_id]);

	const handleAddFavoriteDaily = () => {
		if (!userId) {
			console.error('User not logged in');
			return;
		}
		dispatch(addFavoriteDaily(bacaan_id, userId));
	};

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
					<button
						className="btn btn-primary my-2"
						onClick={() => handleAddFavoriteDaily(userId)}
						disabled={loading}
					>
						{loading ? 'Menambahkan...' : 'Tambah Favorit'}
					</button>
					{error && <p style={{ color: 'red' }}>{error}</p>}

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
