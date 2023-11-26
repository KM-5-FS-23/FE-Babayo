import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar';
import Footer2 from '../components/Footer2';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Discuss from '../components/Discuss';

function DiscussPage() {
	return (
		<div>
			<Navbar />

			<div
				className="flex-col h-screen pt-20"
				id="discuss-content"
			>
				<h1 className="font-semibold text-3xl text-center">
					Rendahnya Minat Baca Berpengaruh terhadap Kualitas Bangsa
				</h1>

				<Discuss />

				<form action="">
					<div
						className="flex justify-between"
						style={{ gap: '1em' }}
					>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full min-w-xs"
						/>
						<button>
							<FontAwesomeIcon icon={faPaperPlane} size='xl' />
						</button>
					</div>
				</form>

				<Footer2 />
			</div>
		</div>
	);
}

export default DiscussPage;
