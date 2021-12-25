import { Fragment } from 'react';

import Hero from '../components/home/hero';
import FeaturedPosts from '../components/home/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage({ featuredPosts }) {
	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={featuredPosts} />
		</Fragment>
	);
}

export async function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			featuredPosts
		}
	};
}

export default HomePage;
