module.exports={
	entry:{
		app: './src/app.js',
	},
	output:{
		path : __dirname + '/public',
		filename:'[name].bundle.js'
	},
	devServer:{
		contentBase: __dirname + '/public'
	},
	module:{
		rules:[
			{
				test : /\.js$/,
				exclude:'/node_modules/',
				use:{
					loader:'babel-loader',
				}
			}
		]		
	}
}