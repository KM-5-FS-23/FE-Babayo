// src/components/BookCollections.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../redux/actions/detailBookActions';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function BookCollections() {
	const dispatch = useDispatch();
	const book = useSelector((state) => state.detailBook.book);
	const loading = useSelector((state) => state.detailBook.loading);

	useEffect(() => {
		dispatch(getBook());
	}, [dispatch]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (!Array.isArray(book) || book.length === 0) {
		return <p>No books available.</p>;
	}

	return (
		<div id="cardBooks">
			{book.map((book) => (
				<div
					key={book.buku_id}
					className="card card-compact bg-base-100"
					style={{ width: '152px' }}
				>
					<figure className="img-book">
						<Link to={`/detail-books/${book.buku_id}`}>
							<img
								src={book.gambar}
								alt={book.judul}
							/>
						</Link>
					</figure>
					<div className="card-body-0">
						<h2 className="card-title">{book.judul}</h2>
						<p>
							by <a href="">{book.penulis}</a>
						</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default BookCollections;
