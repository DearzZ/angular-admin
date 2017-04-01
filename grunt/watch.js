module.exports = {
    options: {
        livereload: 35729 // this port must be same with the connect livereload port
    },
    scripts: {
        options: {
            livereload: true
        },
        files : ['src/**/*.js','src/**/*.less','src/**/*.html'],
        tasks: ['recess:app']
    }
}