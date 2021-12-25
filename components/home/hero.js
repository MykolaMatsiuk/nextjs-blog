import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src="/images/site/hero.jpeg"
					alt="person img"
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I am Jimmy</h1>
			<p>
				A blog about web development - especially frontend frameworks
				like Angular or React.
			</p>
		</section>
	);
}

export default Hero;
