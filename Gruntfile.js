module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			css: {
				files: ['css/*.less'],
				tasks: ['less'],
				options: {
					livereload: true
				}
			},
			
			js: {
				files: ['./index.js'],
				tasks: ['uglify'],
				options: {
					livereload: true
				}
			}
},

		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					'./css/index.css': './css/index.less'
				}
			}
		},

		uglify: {
			development: {
				files: {
					'./js/min/index.min.js': './js/index.js'
				}
			}
		}

	})

	grunt.loadNpmTasks('grunt-contrib-watch') //检测文件添加修改 等
//	grunt.loadNpmTasks('grunt-concurrent') //针对慢任务，sass less
	grunt.loadNpmTasks('grunt-contrib-less')
	grunt.loadNpmTasks('grunt-contrib-uglify')

	grunt.option('force', true) //不因为语法问题中断服务
	grunt.registerTask('default', ['watch']) //注册任务

}