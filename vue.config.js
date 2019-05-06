module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            publicPath: './'
        } else {
            // mutate for development...
        }
    }
}
