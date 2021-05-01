const path = require('path');
const argv = require('yargs').argv;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');

const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;

const htmlWebpackTemplates = ['index', 'listing', 'company', 'types-equipment', 'brands', 'about'];

let htmlWebpackPlugins = htmlWebpackTemplates.map(name => {
    return new HtmlWebpackPlugin({
        filename: `${name}.html`,
        template: `./src/${name}.html`
    })
});

module.exports = {
    mode: argv.mode,
    devtool: "source-map",
    entry: [
        './src/assets/js/index.js'
    ],
    output: {
        filename: 'js/bundle.min.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: isProduction ? [
                                postcssImport(),
                                autoprefixer({
                                    browsers: ['ie >= 9', 'last 4 version']
                                }),
                                cssnano({
                                    preset: 'default',
                                    discardComments: { removeAll: true }
                                })
                            ] : [],
                            sourceMap: true
                        }
                    },
                    "sass-loader"
                ]
            },

            {
                test: /\.(jpe?g|png|gif|svg|webp)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            context: '',
                            outputPath: 'img',
                            publicPath: '../img/',
                        }
                    }
                ]
            },


            {
                test: /\.(html)$/,
                use: {
                    loader: "html-loader",
                    options: {
                        interpolate: true,
                        attrs: ['img:src', 'a:href', 'link:href', 'source:srcset']
                    }
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts',
                        publicPath: '../fonts/',
                    }
                }]
            },
            {
                test: /\.(mov|mp4|webm)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/bundle.min.css",
        }),
    ].concat(htmlWebpackPlugins),
    devServer: {
        port: 9000,
        compress: true,
        open: true
    }
};