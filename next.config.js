const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: 'admin',
				mongodb_password: 'mxFOkIQRXnobNf05',
				mongodb_clustername: 'cluster0',
				mongodb_database: 'blog-site-dev'
			}
		};
	}

	return {
		env: {
			mongodb_username: 'admin',
			mongodb_password: 'mxFOkIQRXnobNf05',
			mongodb_clustername: 'cluster0',
			mongodb_database: 'blog-site'
		}
	};
};
