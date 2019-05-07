module.exports = {
    chainWebpack: config => {
        config;
        if (process.env.NODE_ENV === "production") {
            ("./");
        } else {
            // mutate for development...
        }
    }
};