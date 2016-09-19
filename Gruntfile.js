module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        react: {
            dev: {
                files: {
                    'scripts/app.js': ['scripts/jsx/services/*.jsx', 'scripts/jsx/*.jsx']
                },
                options: {
                    harmony: true,
                    es6module: true
                }
            }
        },
        watch: {
            react: {
                files: ['scripts/jsx/**.jsx'],
                tasks: ['react:dev'],
                options: {
                    spawn: false
                },
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    //base: '',
                    open: true
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
          js: {
            dest: 'scripts/libs/libs.js',
            src: [
                'node_modules/x2js/x2js.js',
                'node_modules/react/dist/react.min.js',
                'node_modules/react-dom/dist/react-dom.min.js',
                'node_modules/axios/dist/axios.min.js'
            ]
          }
            
        }
  
    });


    // Default task(s).
    grunt.registerTask('default', ['react:dev', 'concat', 'connect', 'watch']);
}
