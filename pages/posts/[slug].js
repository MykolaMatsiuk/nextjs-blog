import Head from 'next/head';
import { Fragment } from 'react';

import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

function PostDetailPage({ postData }) {
	return (
		<Fragment>
			<Head>
				<title>{postData.title}</title>
				<meta name="description" content={postData.excerpt} />
			</Head>
			<PostContent post={postData} />
		</Fragment>
	);
}

export async function getStaticProps(context) {
	const { slug } = context.params;
	const postData = getPostData(slug);

	return {
		props: {
			postData
		},
		revalidate: 600
	};
}

export async function getStaticPaths() {
	const postsFiles = getPostsFiles();

	const slugs = postsFiles.map((filename) => filename.replace(/\.md$/, ''));

	return {
		paths: slugs.map((slug) => ({ params: { slug } })),
		fallback: false
	};
}

export default PostDetailPage;
