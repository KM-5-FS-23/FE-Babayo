import React from 'react';
import './pages.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Login() {
	return (
		<div id="login-content">
			<div className="hero min-h-screen bg-base-100">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src="https://i.imgur.com/OePwoLP.jpg"
						className="min-w-xs lg:max-w-xl"
					/>
					<div className="card shrink-0 w-full max-w-sm bg-base-100">
						<h1 className="text-2xl font-bold text-center">Masuk ke Akun</h1>
						<p className="text-center">
							Yuk, lanjutkan meningkatkan literasi di Babayo
						</p>
						<form className="card-body">
							<div className="form-control">
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
								<label className="label px-0">
									<div className="form-control">
										<label className="label px-0">
											<input
												type="checkbox"
												className="checkbox checkbox-sm checkbox-secondary mr-3"
											/>
											<hr />
											<span className="label-text">Ingat saya</span>
										</label>
									</div>
									<a
										href="#"
										className="label-text-alt link link-hover"
									>
										Forgot password?
									</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<Link
									to="/homepage"
									className="btn btn-secondary"
								>
									Masuk
								</Link>
								<br />
								<Link
									to="/register"
									className="btn btn-base-100"
								>
									Daftar
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
