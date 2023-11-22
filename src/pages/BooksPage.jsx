import React from 'react';
import Navbar from '../components/navbar';

function BooksPage() {
	return (
		<div>
			<Navbar />
			<div className="drawer lg:drawer-open">
				<input
					id="my-drawer-2"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-side">
					<label
						htmlFor="my-drawer-2"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					<ul className="menu p-4 w-80 min-h-full bg-accent text-base-content">
						{/* Sidebar content here */}
						<li>
							<a>Sidebar Item 1</a>
						</li>
						<li>
							<a>Sidebar Item 2</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default BooksPage;
