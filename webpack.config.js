module.exports = {
    entry: {
        flutterwave: './flutterwave_src.js',
        flutterwaveSlim: './flutterwaveSlim_src.js'
    },
    output: {
        path: __dirname+'/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
        { test: /\.css$/, loader: "style!css" },
        { test: /[\/]angular\.js$/, loader: "exports?angular" }
        ]
    }
};
