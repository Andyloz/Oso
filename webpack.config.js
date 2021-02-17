const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".sass"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: "ts-loader"
            },
            {
                test: /\.sass$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}