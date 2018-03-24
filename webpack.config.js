var path = require('path');


module.exports = {
	mode: 'development',
	entry: {
		app: "./app/assets/scripts/app.js",
		vendor: "./app/assets/scripts/vendor.js"
	},
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "[name].js"
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		}]
	},

}