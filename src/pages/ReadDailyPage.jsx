import React from 'react';
import Navbar from '../components/navbar';
import Footer2 from '../components/Footer2';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function ReadDailyPage() {
	return (
		<div>
			<Navbar />

			<div
				className="flex-col h-screen pt-20"
				id="read-content"
			>
				<div className="flex justify-between">
					<h1 className="font-semibold">
						Rendahnya Minat Baca Berpengaruh terhadap Kualitas Bangsa
					</h1>

					<div className="flex-col text-right font-semibold">
						<h1>Waktu Membaca</h1>
						<p>00:00:00</p>
					</div>
				</div>

				<div className="flex w-full my-12">
					<p className="text-justify">
						Membaca adalah jendela dunia karena memungkinkan manusia untuk
						belajar tentang hal-hal yang tidak mereka ketahui. Akibatnya,
						membaca menjadi penting dan berpengaruh bagi masa depan dunia.
						Namun, kondisi perkembangan minat dan kemampuan membaca masyarakat
						Indonesia saat ini sangat memprihatinkan. Terutama di kalangan
						masyarakat dan kalangan remaja. Banyak remaja Indonesia yang masih
						belum sadar akan pentingnya membaca. Lebih jauh lagi, remaja
						merupakan generasi penerus yang diharapkan dapat menjunjung tinggi
						martabat negara. Agar dapat bersaing dengan daerah bahkan negara
						lain, yang harus mampu berpikir kritis dan luas. Kita harus
						menyadari beberapa faktor yang menyebabkan rendahnya minat baca
						remaja di Indonesia. Begitu pula dengan tidak adanya kebiasaan
						membaca yang ditanamkan pada anak sejak dini. Kemudian distribusi
						fasilitas pendidikan yang tidak merata, serta kurangnya fasilitas
						pendidikan yang berkualitas. Tidak dapat dipungkiri masih banyak
						anak yang putus sekolah, dan fasilitas pendidikan yang tidak
						mendukung kegiatan belajar mengajar. Hal ini secara tidak langsung
						berdampak pada perkembangan literasi berkualitas di Indonesia.
						Terakhir, masih minimnya produksi buku di Indonesia akibat masih
						banyaknya penerbit di daerah yang tertinggal, karena insentif bagi
						produsen buku dinilai tidak adil, dan pajak bagi penulis yang
						menerima royalti rendah. Selanjutnya, seperti halnya pengenalan
						media sosial dan fitur game online. Membuatnya lebih menarik bagi
						remaja daripada membaca. Mungkin banyak dari kita yang merasakan
						efek positif dari media sosial. Namun, media sosial memiliki dampak
						negatif yaitu kecanduan. Dalam hal itu, seseorang akan malas membaca
						atau bahkan belajar. Hal ini jangan sampai terjadi sebagai generasi
						harapan bangsa, karena akan mempersulit mencari pekerjaan dan
						bersaing dengan daerah bahkan negara lain. Lebih jauh lagi, generasi
						muda akan berjuang untuk mencapai potensi penuh mereka jika mereka
						tidak tertarik membaca.Melihat beberapa kondisi tersebut, kurangnya
						minat membaca berdampak signifikan terhadap kemampuan berpikir
						kritis kita. Akibatnya, kita mudah terpengaruh berita bohong atau
						hoax, minimnya pengetahuan dan wawasan, serta sulit mengembangkan
						potensi diri yang berdampak signifikan terhadap kualitas bangsa
						Indonesia dan berkontribusi terhadap keterbelakangan negara.
						Minimnya minat baca di Indonesia tidak bisa dipungkiri menjadi
						masalah yang harus dibenahi. Untuk mengatasi masalah ini, kita bisa
						melakukan hal-hal sederhana seperti mengingatkan diri sendiri betapa
						pentingnya membaca. Selanjutnya, kita harus membangun budaya membaca
						dari sekarang.
					</p>
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
						to="/detail-books"
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
