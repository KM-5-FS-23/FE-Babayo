import React from 'react';
import Navbar from '../components/navbar';
import Footer2 from '../components/Footer2';

function CreateDailyPage() {
	return (
		<div>
			<Navbar />

			<div
				className="flex-col h-screen pt-20"
				id="create-content"
			>
				<h1 className="font-semibold text-3xl text-center">Buat Bacaan Baru</h1>

				<form action="">
					<div
						className="flex justify-between items-center pt-6"
						style={{ gap: '1.5em' }}
					>
						<h1 className="w-44 text-base">Judul Bacaan :</h1>
						<input
							type="text"
							className="input input-bordered w-full min-w-xs"
						/>
					</div>

					<div
						className="flex justify-between items-center pt-6"
						style={{ gap: '1.5em' }}
					>
						<h1 className="w-44 text-base">Kategori Bacaan :</h1>
						<input
							type="text"
							className="input input-bordered w-full min-w-xs"
						/>
					</div>

					<div
						className="flex justify-between items-center pt-6"
						style={{ gap: '1.5em' }}
					>
						<h1 className="w-44 text-base">Isi Bacaan :</h1>
						<textarea
							typeof="text"
							className="textarea textarea-bordered textarea-lg w-full min-w-xs h-72 resize-none"
						></textarea>
					</div>

					<div className="flex justify-center py-6">
						<button className="btn btn-secondary">Tambah Bacaan</button>
					</div>
				</form>

				<Footer2 />
			</div>
		</div>
	);
}

export default CreateDailyPage;
