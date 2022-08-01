const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
	mode: "development", 
	entry: "./index.js", 
	plugins: [new MiniCssExtractPlugin()],
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js"
	},
	target: "web",
	devServer: {
		port: "3000",
		static: ["./public"],
		open: true,
		hot: true ,
		liveReload: true
	},
	resolve: {
		extensions: ['.js','.json'] 
	},
	module:{
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use:  'babel-loader'
			},{
				test: /\.(s(a|c)ss)$/,
				exclude: /node_modules/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			}
		]
	}
}