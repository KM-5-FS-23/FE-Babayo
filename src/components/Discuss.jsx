import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Discuss() {
	return (
		<div>
			<div id="dailyCards">
				<div className="card w-full bg-base-100 shadow-md">
					<div className="card-body">
						<div className="flex justify-between pt-3">
							<div className="flex align-center">
								<div className="avatar flex align-center">
									<div className="w-16 rounded">
										<img
											src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
											alt="Tailwind-CSS-Avatar-component"
										/>
									</div>
								</div>

								<div className="flex-col">
									<label
										htmlFor=""
										className="label text-md font-semibold"
									>
										Willy
									</label>
									<label
										htmlFor=""
										className=" label text-xs"
									>
										5 jam yang lalu
									</label>
								</div>
							</div>
						</div>

						<p>
							Rendahnya minat baca bisa saja disebabkan karena kurangnya akses
							buku atau materi bacaan yang menarik dan relevan pada masyarakat
							setempat
						</p>

						<div className="flex justify-between">
							<div
								className="flex"
								style={{ gap: '9px' }}
							>
								<div
									className="flex"
									style={{ gap: '3px' }}
								>
									<button>
										<FontAwesomeIcon icon={faThumbsUp} />
									</button>
									<span>12</span>
								</div>

								<div
									className="flex"
									style={{ gap: '3px' }}
								>
									<button>
										<FontAwesomeIcon icon={faThumbsDown} />
									</button>
									<span>1</span>
								</div>
							</div>

							<Link>
								<div
									className="flex"
									style={{ gap: '3px' }}
								>
									<button>
										<FontAwesomeIcon icon={faReply} />
									</button>
									<span>Balas</span>
								</div>
							</Link>
						</div>
					</div>
				</div>

				<div className="card w-full bg-base-100 shadow-md">
					<div className="card-body">
						<div className="flex justify-between pt-3">
							<div className="flex align-center">
								<div className="avatar flex align-center">
									<div className="w-16 rounded">
										<img
											src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
											alt="Tailwind-CSS-Avatar-component"
										/>
									</div>
								</div>

								<div className="flex-col">
									<label
										htmlFor=""
										className="label text-md font-semibold"
									>
										Ikhwal
									</label>
									<label
										htmlFor=""
										className=" label text-xs"
									>
										5 jam yang lalu
									</label>
								</div>
							</div>
						</div>

						<p>
							Jika tidak ada fasilitas perpustakaan atau toko buku di sekitar,
							maka akan sulit bagi orang untuk mendapatkan akses ke buku-buku
							yang berkuatlitas
						</p>

						<div className="flex justify-between">
							<div
								className="flex"
								style={{ gap: '9px' }}
							>
								<div
									className="flex"
									style={{ gap: '3px' }}
								>
									<button>
										<FontAwesomeIcon icon={faThumbsUp} />
									</button>
									<span>12</span>
								</div>

								<div
									className="flex"
									style={{ gap: '3px' }}
								>
									<button>
										<FontAwesomeIcon icon={faThumbsDown} />
									</button>
									<span>1</span>
								</div>
							</div>

							<Link>
								<div
									className="flex"
									style={{ gap: '3px' }}
								>
									<button>
										<FontAwesomeIcon icon={faReply} />
									</button>
									<span>Balas</span>
								</div>
							</Link>
						</div>
					</div>
				</div>

				<div className="card w-full bg-base-100 shadow-md">
					<div className="card-body">
						<div className="flex justify-between pt-3">
							<div className="flex align-center">
								<div className="avatar flex align-center">
									<div className="w-16 rounded">
										<img
											src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
											alt="Tailwind-CSS-Avatar-component"
										/>
									</div>
								</div>

								<div className="flex-col">
									<label
										htmlFor=""
										className="label text-md font-semibold"
									>
										Fahki
									</label>
									<label
										htmlFor=""
										className=" label text-xs"
									>
										5 jam yang lalu
									</label>
								</div>
							</div>
						</div>

						<p>
							Mungkin tidak ada program atau inisiatif lokal yang mendorong atau
							mempromosikan kegiatan membaca di komunitas tersebut
						</p>

						<div className="flex justify-between">
							<div
								className="flex"
								style={{ gap: '9px' }}
							>
								<div
									className="flex"
									style={{ gap: '3px' }}
								>
									<button>
										<FontAwesomeIcon icon={faThumbsUp} />
									</button>
									<span>12</span>
								</div>

								<div
									className="flex"
									style={{ gap: '3px' }}
								>
									<button>
										<FontAwesomeIcon icon={faThumbsDown} />
									</button>
									<span>1</span>
								</div>
							</div>

							<Link>
								<div
									className="flex"
									style={{ gap: '3px' }}
								>
									<button>
										<FontAwesomeIcon icon={faReply} />
									</button>
									<span>Balas</span>
								</div>
							</Link>
						</div>
					</div>
				</div>

				<div className="card w-full bg-base-100 shadow-md">
					<div className="card-body">
						<div className="flex justify-between pt-3">
							<div className="flex align-center">
								<div className="avatar flex align-center">
									<div className="w-16 rounded">
										<img
											src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
											alt="Tailwind-CSS-Avatar-component"
										/>
									</div>
								</div>

								<div className="flex-col">
									<label
										htmlFor=""
										className="label text-md font-semibold"
									>
										Andi
									</label>
									<label
										htmlFor=""
										className=" label text-xs"
									>
										5 jam yang lalu
									</label>
								</div>
							</div>
						</div>

						<p>
							Budaya membaca bisa dimulai dari lingkungan sekolah. Jika tidak
							ada dukungan dari sana, minat baca dapat menurun
						</p>

						<div className="flex justify-between">
							<div
								className="flex"
								style={{ gap: '9px' }}
							>
								<div
									className="flex"
									style={{ gap: '3px' }}
								>
									<button>
										<FontAwesomeIcon icon={faThumbsUp} />
									</button>
									<span>12</span>
								</div>

								<div
									className="flex"
									style={{ gap: '3px' }}
								>
									<button>
										<FontAwesomeIcon icon={faThumbsDown} />
									</button>
									<span>1</span>
								</div>
							</div>

							<Link>
								<div
									className="flex"
									style={{ gap: '3px' }}
								>
									<button>
										<FontAwesomeIcon icon={faReply} />
									</button>
									<span>Balas</span>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Discuss;
