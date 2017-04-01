module.exports = {
    all:{
        options: {                       // Target options
            optimizationLevel: 3,
        },
        files: [{
            expand: true,                  // Enable dynamic expansion
            cwd: 'src/',                   // Src matches are relative to this path
            src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
            dest: 'dist/'                  // Destination path prefix
        }]
    }
}