import "./style.css";

const Footer = () => {
	return (
		<footer className='footer'>
			<section>
				<ul>
					<li>
						<a href='facebook.com' target='_blank'>
							<img src='/public/assets/fb.png' alt='Facebook' />
						</a>
					</li>
					<li>
						<a href='twitter.com' target='_blank'>
							<img src='/public/assets/tw.png' alt='Twitter' />
						</a>
					</li>
					<li>
						<a href='instagram.com' target='_blank'>
							<img src='/public/assets/ig.png' alt='Instagram' />
						</a>
					</li>
				</ul>
			</section>
			<section>
				<img src='/public/assets/logo.png' alt='' />
			</section>
			<section>
				<p>Desenvolvido por Ian Augusto Silva</p>
			</section>
		</footer>
	);
};

export default Footer;
