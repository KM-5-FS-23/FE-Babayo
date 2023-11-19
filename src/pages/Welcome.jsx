import React from 'react';
import './pages.css';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Books from '../components/Books';

function Welcome() {
	return (
		<div>
			<Navbar />

			<div className="hero min-h-screen bg-primary">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src="https://i.imgur.com/bUdybHS.png"
						className="max-w-sm"
					/>
					<div>
						<h1 className="text-4xl font-bold">
							Selalu siap untuk memberikanmu inspirasi setiap hari!
						</h1>
						<p className="py-6">
							Nikmati rangkaian bacaan harian yang penuh wawasan setiap pagi
						</p>
						<button className="btn btn-secondary">Mulai Membaca</button>
					</div>
				</div>
			</div>

			<div id="our-products">
				<h1 className="text-3xl font-bold">Mengapa harus Baca disini?</h1>
				<div id="card-products">
					<div
						className="card w-96 bg-base-100 text-primary-content"
						style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}
					>
						<div className="card-body">
							<div
								className="card-title flex"
								style={{
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								<h2>Poin</h2>
								<img
									src="https://i.imgur.com/nTxMstT.png"
									alt=""
									style={{ width: '24px', height: '24px' }}
								/>
							</div>
							<p>
								Kumpulkan poin sebanyak-banyaknya untuk mendapatkan bacaan yang
								lengkap
							</p>
						</div>
					</div>
					<div
						className="card w-96 bg-base-100 text-primary-content"
						style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}
					>
						<div className="card-body">
							<div
								className="card-title flex"
								style={{
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								<h2>Bacaan Harian</h2>
								<img
									src="https://i.imgur.com/FZa6Fd2.png"
									alt=""
									style={{ width: '24px', height: '24px' }}
								/>
							</div>
							<p>
								Tingkatkan pengetahuan setiap hari dengan fitur bacaan harian
								terbaru dari kami!
							</p>
						</div>
					</div>
					<div
						className="card w-96 bg-base-100 text-primary-content"
						style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}
					>
						<div className="card-body">
							<div
								className="card-title flex"
								style={{
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								<h2>Koleksi Buku</h2>
								<img
									src="https://i.imgur.com/k4DCzax.png"
									alt=""
									style={{ width: '24px', height: '24px' }}
								/>
							</div>
							<p>
								Jadikan perpustakaan pribadimu di sini dan mulai petualangan
								membaca yang seru!
							</p>
						</div>
					</div>
					<div
						className="card w-96 bg-base-100 text-primary-content"
						style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}
					>
						<div className="card-body">
							<div
								className="card-title flex"
								style={{
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								<h2>Workshop Online</h2>
								<img
									src="https://i.imgur.com/Ze2fSyI.png"
									alt=""
									style={{ width: '24px', height: '24px' }}
								/>
							</div>
							<p>
								Mulailah perjalanan menuju kesuksesanmu hari ini dengan fitur
								workshop online kami!
							</p>
						</div>
					</div>
				</div>
			</div>

			<div id="recommendations">
				<h1 className="text-3xl font-bold">Rekomendasi Buku Untuk Kamu Baca</h1>
				<Books />
			</div>

			<div
				id="our-team"
				className="bg-accent"
			>
				<h1 className="text-3xl font-bold text-center">Tim Kami</h1>
				<div id="team-cards">
					<div
						className="card card-side bg-primary shadow-xl"
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							alignItems: 'center',
							padding: '0 12px',
						}}
					>
						<div className="avatar">
							<div className="w-20 rounded">
								<img
									src="https://i.imgur.com/SqHE1Ct.jpg"
									alt="Fahki Rohandi"
								/>
							</div>
						</div>
						<div className="card-body">
							<h2 className="card-title">Fahki Rohandi</h2>
							<p>FS23</p>
						</div>
					</div>
					<div
						className="card card-side bg-primary shadow-xl"
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							alignItems: 'center',
							padding: '0 12px',
						}}
					>
						<div className="avatar">
							<div className="w-20 rounded">
								<img
									src="https://i.imgur.com/E8thYwt.jpg"
									alt="Ikhwal Febriyo Pratama"
								/>
							</div>
						</div>
						<div className="card-body">
							<h2 className="card-title">Ikhwal Febriyo Pratama</h2>
							<p>FS23</p>
						</div>
					</div>
					<div
						className="card card-side bg-primary shadow-xl"
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							alignItems: 'center',
							padding: '0 12px',
						}}
					>
						<div className="avatar">
							<div className="w-20 rounded">
								<img
									src="https://i.imgur.com/8zefAeI.jpg"
									alt="Willy Nurgian"
								/>
							</div>
						</div>
						<div className="card-body">
							<h2 className="card-title">Willy Nurgian</h2>
							<p>FS23</p>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Welcome;
