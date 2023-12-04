import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../redux/actions/detailBookActions';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function BookCollections({ currentPage, searchQuery }) {
	const dispatch = useDispatch();
	const { book, loading } = useSelector((state) => state.detailBook);

	useEffect(() => {
		dispatch(getBook(currentPage, searchQuery));
	}, [currentPage, searchQuery, dispatch]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (!Array.isArray(book) || book.length === 0) {
		return <p>No books available.</p>;
	}

	const itemsPerPage = 10;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentBooks = book.slice(startIndex, endIndex);

	return (
		<div id="cardBooks">
			{currentBooks.map((bookItem) => (
				<div
					key={bookItem.buku_id}
					className="card card-compact bg-base-100"
					style={{ width: '152px' }}
				>
					<figure className="img-book">
						<Link to={`/detail-books/${bookItem.buku_id}`}>
							<img
								src={bookItem.gambar}
								alt={bookItem.judul}
								style={{ width: '100%', height: '187px', objectFit: 'cover' }}
							/>
						</Link>
					</figure>
					<div className="card-body-0">
						<h2 className="card-title text-base">{bookItem.judul}</h2>
						<p>
							by <a href="">{bookItem.penulis}</a>
						</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default BookCollections;
