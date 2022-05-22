const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
	addWebpackAlias({
		components: path.resolve(__dirname, 'src/components/'),
		services: path.resolve(__dirname, 'src/services/'),
		assets: path.resolve(__dirname, 'src/assets/'),
		pages: path.resolve(__dirname, 'src/pages/'),
	})
);
