import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

function AllPostsPage({ allPosts }) {
	return <AllPosts posts={allPosts} />;
}

export async function getStaticProps() {
	const allPosts = getAllPosts();

	return {
		props: {
			allPosts
		}
	};
}

export default AllPostsPage;
