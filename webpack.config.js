var webpack = require("webpack");
var path = require("path");

var isProduction = function(){
	return process.env.NODE_ENV === 'production';
};	
var plugins = [];
if(isProduction()){
	plugins.push(
	    new webpack.optimize.UglifyJsPlugin({
      		test: /(\.jsx|\.js)$/,
      		compress: {
        		warnings: false
      		},
    	})		
   );
}

module.exports = {
	target: 'web',
	cache: true,
	entry: 'src/index.js',
	output: {
		path: path.join(__dirname,'./dist'),
		filename: 'js/index.bundle.js',
		publicPath: isProduction()? 'http://localhost:4000/':'http://localhost:4000/',

	},

	module: {
		loaders: [
			{
				test: /(\.jsx|\.js)$/,
				loader: 'babel?presets[]=es2015&presets[]=react',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
		        test: /\.(jpe?g|png|gif|svg)$/,
        		loader: 'url?limit=8024&name=images/[name].[ext]'
			},
			{
		        test: /\.html$/,
       			 loader: 'url?name=[name].[ext]'
			}
		],
	},

	plugins: plugins,
	resolve: {
		root: __dirname,
		extensions: ['','.js','.jsx']
	},
	devtool: isProduction()?null:'source-map',

};