var prod = "./build/prod";
var dev = "./build/dev";
var src = './src';

module.exports = {

    // DEVELOPMENT
    devCss: {
        src: src + "/**/*.{sass,scss}",
        dest: dev,
        settings: {
            indentedSyntax: true, // Enable .sass syntax!
            imagePath: 'images' // Used by the image-url helper
        }
    },
    devJs: {
        src: src + "/**/*.{js,coffee}",
        dest: dev
    },
    devImg: {
        src: src + "/img/**/*",
        dest: dev + "/i"
    },
    devMarkup: {
        src: src + "/**/*.jade",
        dest: dev
    },
    devWatch: {

    },
    devServer: {
        dest: dev
    },

    // PRODUCTION
    prod:{},
    prodCss: {
        src: src + "/**/*.{sass,scss}",
        dest: prod,
        settings: {
            indentedSyntax: true, // Enable .sass syntax!
            imagePath: 'i' // Used by the image-url helper
        }
    },
    prodJs: {
        src: src + "/**/*.{js,coffee}",
        dest: prod
    },
    prodImg: {
        src: src + "/img/**",
        dest: prod + "/i"
    },
    prodMarkup: {
        src: src + "/**/*.jade",
        dest: prod
    },
    prodServer: {
        dest: prod
    }

};