import React from 'react';
import './pages.css';
import Navbar from '../components/navbar';
import Footer2 from '../components/Footer2';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function DetailBooksPage() {
	return (
		<div>
			<Navbar />
			<div className="flex-col h-screen pt-20">
				<div className="hero-content justify-start">
					<Link
						to="books"
						className="btn btn-secondary"
					>
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
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</Link>
				</div>
				<div
					className="hero bg-base-100"
					id="detail-books"
				>
					<div className="hero-content flex-col lg:flex-row">
						<div className="flex-col">
							<img
								src="https://i.imgur.com/gzVaE2g.png"
								className="card card-compact w-72"
							/>
							<button className="btn btn-secondary w-full my-2">
								Baca Buku
							</button>
							<button className="btn btn-primary w-full my-2">
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
						</div>
						<div className="flex-col w-full">
							<h1 className="text-3xl font-bold">Laskar Pelangi</h1>
							<table className="my-3">
								<tr>
									<td className="w-32">Bahasa</td>
									<td className="w-4">:</td>
									<td>Bahasa Indonesia</td>
								</tr>
								<tr>
									<td className="w-32">Penulis</td>
									<td className="w-4">:</td>
									<td>Andrea Hirata</td>
								</tr>
								<tr>
									<td className="w-32">Tahun Terbit</td>
									<td className="w-4">:</td>
									<td>2005</td>
								</tr>
								<tr>
									<td className="w-32">Kategori</td>
									<td className="w-4">:</td>
									<td>Fiksi</td>
								</tr>
							</table>

							<h1 className="text-3xl font-bold">Sinopsis</h1>
							<p className="my-3 text-justify">
								Tak peduli seberat apa pun kondisi sekolah itu, sepuluh anak
								dari keluarga miskin itu tetap bergeming. Di dada mereka, telah
								menggumpal tekad untuk maju. Begitu banyak hal menakjubkan yang
								terjadi dalam masa kecil para anggota Laskar Pelangi. Sebelas
								orang anak Melayu Belitong yang luar biasa ini tak menyerah
								walau keadaan tak bersimpati pada mereka. Tengoklah Lintang,
								seorang kuli kopra cilik yang genius dan dengan senang hati
								bersepeda 80 kilometer pulang pergi untuk memuaskan dahaganya
								akan ilmu bahkan terkadang hanya untuk menyanyikan padamu negeri
								di akhir jam sekolah atau Mahar, seorang pesuruh tukang parut
								kelapa sekaligus seniman dadakan yang imajinatif, tak logis,
								kreatif, dan sering diremehkan sahabat-sahabatnya, namun
								berhasil mengangkat derajat sekolah kampung mereka dalam
								karnaval 17 Agustus, dan juga sembilan orang Laskar Pelangi lain
								yang begitu bersemangat dalam menjalani hidup dan berjuang
								meraih cita-cita.
							</p>
						</div>
					</div>
				</div>
				<Footer2 />
			</div>
		</div>
	);
}

export default DetailBooksPage;
