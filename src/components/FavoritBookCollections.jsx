import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function FavoritBookCollections({ favoriteBooks }) {
	return (
		<div>
			<div id="cardBooks">
				{favoriteBooks.map((bookItem) => (
					<div
						key={bookItem.fav_buku_id}
						className="card card-compact bg-base-100"
						style={{ width: '152px' }}
					>
						<figure className="img-book">
							<Link to={`/detail-books/${bookItem.koleksiBuku?.buku_id}`}>
								<img
									src={bookItem.koleksiBuku?.gambar}
									alt={bookItem.koleksiBuku?.judul}
									style={{ width: '100%', height: '187px', objectFit: 'cover' }}
								/>
							</Link>
						</figure>
						<div className="card-body-0">
							<h2 className="card-title text-base">
								{bookItem.koleksiBuku?.judul}
							</h2>
							<p>
								by <a href="">{bookItem.koleksiBuku?.penulis}</a>
							</p>
							<button className="btn btn-outline btn-error w-full">
								<FontAwesomeIcon icon={faTrash} />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default FavoritBookCollections;
