import { Fragment } from 'react';
import Head from 'next/head';

import Hero from '../components/home/hero';
import FeaturedPosts from '../components/home/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage({ featuredPosts }) {
	return (
		<Fragment>
			<Head>
				<title>Jimmy's Blog</title>
				<meta
					name="description"
					content="Jimmy's blog about programming and web development"
				/>
			</Head>
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
