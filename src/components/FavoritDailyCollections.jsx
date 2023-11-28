import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function FavoritDailyCollections() {
	return (
		<div>
			<div id="dailyTables">
				<div className="overflow-x-auto">
					<table className="table">
						<thead>
							<tr>
								<th></th>
								<th>Judul</th>
								<th>Penulis</th>
								<th>Kategori</th>
								<th>Aksi</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<th>1</th>
								<td>
									Rendahnya Minat Baca Berpengaruh terhadap Kualitas Bangsa
								</td>
								<td>Willy</td>
								<td>Artikel</td>
								<td
									className="flex"
									style={{ gap: '1em' }}
								>
									<button className="btn btn-outline btn-error">
										<FontAwesomeIcon icon={faTrash} />
									</button>
									<button className="btn btn-outline btn-success">Buka</button>
								</td>
							</tr>

							<tr>
								<th>2</th>
								<td>8 Cara Menyenangkan agar Anak Gemar Membaca Buku</td>
								<td>Munir Yusuf</td>
								<td>Artikel</td>
								<td
									className="flex"
									style={{ gap: '1em' }}
								>
									<button className="btn btn-outline btn-error">
										<FontAwesomeIcon icon={faTrash} />
									</button>
									<button className="btn btn-outline btn-success">Buka</button>
								</td>
							</tr>

							<tr>
								<th>3</th>
								<td>Pentingnya Peningkatan Literasi Pada Mahasiswa</td>
								<td>Binuko Amarseto</td>
								<td>Artikel</td>
								<td
									className="flex"
									style={{ gap: '1em' }}
								>
									<button className="btn btn-outline btn-error">
										<FontAwesomeIcon icon={faTrash} />
									</button>
									<button className="btn btn-outline btn-success">Buka</button>
								</td>
							</tr>
							<tr>
								<th>4</th>
								<td>
									Cerita Awal Mula Penulis Novel “Layangan Putus” Tulisannya
									Viral
								</td>
								<td>Ahmad Fuadi</td>
								<td>Artikel</td>
								<td
									className="flex"
									style={{ gap: '1em' }}
								>
									<button className="btn btn-outline btn-error">
										<FontAwesomeIcon icon={faTrash} />
									</button>
									<button className="btn btn-outline btn-success">Buka</button>
								</td>
							</tr>

							<tr>
								<th>5</th>
								<td>
									Rendahnya Minat Baca Berpengaruh terhadap Kualitas Bangsa
								</td>
								<td>Willy</td>
								<td>Artikel</td>
								<td
									className="flex"
									style={{ gap: '1em' }}
								>
									<button className="btn btn-outline btn-error">
										<FontAwesomeIcon icon={faTrash} />
									</button>
									<button className="btn btn-outline btn-success">Buka</button>
								</td>
							</tr>

							<tr>
								<th>6</th>
								<td>8 Cara Menyenangkan agar Anak Gemar Membaca Buku</td>
								<td>Munir Yusuf</td>
								<td>Artikel</td>
								<td
									className="flex"
									style={{ gap: '1em' }}
								>
									<button className="btn btn-outline btn-error">
										<FontAwesomeIcon icon={faTrash} />
									</button>
									<button className="btn btn-outline btn-success">Buka</button>
								</td>
							</tr>

							<tr>
								<th>7</th>
								<td>Pentingnya Peningkatan Literasi Pada Mahasiswa</td>
								<td>Binuko Amarseto</td>
								<td>Artikel</td>
								<td
									className="flex"
									style={{ gap: '1em' }}
								>
									<button className="btn btn-outline btn-error">
										<FontAwesomeIcon icon={faTrash} />
									</button>
									<button className="btn btn-outline btn-success">Buka</button>
								</td>
							</tr>
							<tr>
								<th>8</th>
								<td>
									Cerita Awal Mula Penulis Novel “Layangan Putus” Tulisannya
									Viral
								</td>
								<td>Ahmad Fuadi</td>
								<td>Artikel</td>
								<td
									className="flex"
									style={{ gap: '1em' }}
								>
									<button className="btn btn-outline btn-error">
										<FontAwesomeIcon icon={faTrash} />
									</button>
									<button className="btn btn-outline btn-success">Buka</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default FavoritDailyCollections;
