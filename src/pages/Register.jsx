import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Register() {
	return (
		<div id="register-content">
			<div className="hero min-h-screen bg-base-100">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src="https://i.imgur.com/48h10ws.png"
						className="min-w-xs lg:max-w-xl"
					/>
					<div className="card shrink-0 w-full max-w-sm bg-base-100">
						<h1 className="text-2xl font-bold text-center">Pendaftaran Akun</h1>
						<p className="text-center">Yuk, daftarkan akunmu sekarang juga!</p>
						<form className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">
										Nama Lengkap <span className="label-required">*</span>
									</span>
								</label>
								<input
									type="text"
									className="input input-bordered input-sm w-full max-w-xs"
									required
								/>
								<label className="label">
									<span className="label-text">
										Username <span className="label-required">*</span>
									</span>
								</label>
								<input
									type="text"
									className="input input-bordered input-sm w-full max-w-xs"
									required
								/>
								<label className="label">
									<span className="label-text">
										Email <span className="label-required">*</span>
									</span>
								</label>
								<input
									type="text"
									className="input input-bordered input-sm w-full max-w-xs"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">
										Password <span className="label-required">*</span>
									</span>
								</label>
								<input
									type="password"
									className="input input-bordered input-sm w-full max-w-xs"
									required
								/>
								<label className="label">
									<span className="label-text">
										Konfirmasi Password{' '}
										<span className="label-required">*</span>
									</span>
								</label>
								<input
									type="password"
									className="input input-bordered input-sm w-full max-w-xs"
									required
								/>
								<label className="label px-0">
									<div className="form-control">
										<label className="label px-0">
											<input
												type="checkbox"
												className="checkbox checkbox-sm checkbox-secondary mr-3"
												required
											/>
											<span className="label-text text-justify">
												Saya setuju dengan syarat & ketentuan dan kebijakan
												privasi
											</span>
										</label>
									</div>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-secondary">Daftar</button>
								<br />
								<Link
									to="/login"
									className="btn btn-base-100"
								>
									Masuk ke akunmu
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
