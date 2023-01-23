module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, // whenever import a file that ends with mjs or js, need to process by babel
                exclude: /node_modules/, // not run babel in node modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}