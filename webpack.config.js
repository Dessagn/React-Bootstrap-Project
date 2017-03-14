var path = require("path");
module.exports = {
    devServer: {
    	/*
    	inline: true is used when we have js file
    	 */
        inline: true,
        contentBase: './public',
        port: 3000
    },
    entry: {
        app: ["babel-polyfill", "./src/index.js"]
        
    },
    output: {
        path: path.resolve(__dirname, "build"),
        //publicPath: "/assets/",
        filename: "bundle.js"
    },
    module:{
    	loaders:[
    		{
    			test: /\.js$/,
    			exclude: /node_modules/,
    			loader: 'babel-loader'
    		}
    	]
    },
};
