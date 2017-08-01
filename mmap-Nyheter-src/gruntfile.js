module.exports = function (grunt) {
  var spsurl = grunt.option('spsurl') || 'http://localhost:8080'
  var profile = 'profile=' + grunt.option('profile') || ''
  var pkg = grunt.file.readJSON('package.json')
  var pkgName = pkg.name
  var pkgAuthor = pkg.author
  var pkgVersion = pkg.version
  var pkgCsmVersion = pkg.csmversion
  var pkgDescription = pkg.description
  var pkgDate = grunt.template.today()

  grunt.loadNpmTasks('grunt-replace')
  // Project configuration.
  grunt.initConfig({
    pkg: pkg,
    pkgName: pkgName,
    pkgAuthor: pkgAuthor,
    pkgVersion: pkgVersion,
    pkgCsmVersion: pkgCsmVersion,
    pkgDescription: pkgDescription,
    pkgDate: pkgDate,
    spsurl: spsurl,
    profile: profile,
    connect: {
      server: {
        options: {
          base: ['./']
        }
      }
    },
    // replacetxt: {
    //   dist: {
    //     options: {
    //       patterns: [
    //         {
    //           match: 'foo',
    //           replacement: 'bar'
    //         }
    //       ]
    //     },
    //     files: [
    //       {expand: true, flatten: true, src: ['module_data/test.txt'], dest: 'dev_env/tmp/'}
    //     ]
    //   }
    // },
    standard: {
      options: {
        format: false
      },
      app: {
        src: [ 'src/**/*.js' ]
      },
      gruntfile: {
        src: [ 'gruntfile.js' ]
      }
    },
    watch: {
      gruntfile: {
        files: 'gruntfile.js',
        tasks: ['standard']
      },
      win: {
        files: ['src/**/*.js', 'css/**/*.css'],
        tasks: ['standard', 'replace:txt', 'usebanner:js', 'usebanner:txt', 'usebanner:css', 'replace:html', 'copy:module', 'css_import', 'replace:xml', 'md2html', 'browserify:dist', 'exec:transport_win', 'exec:reloadcsm_win'],
        options: {
          atBegin: true,
          spawn: false,
          livereload: true
        }
      },
      unix: {
        files: ['src/**/*.js', 'css/**/*.css'],
        tasks: ['standard', 'csslint', 'replace:html', 'copy:module', 'css_import', 'replace:xml', 'md2html', 'browserify:dist', 'exec:transport_unix', 'exec:reloadcsm_unix'],
        options: {
          atBegin: true,
          spawn: false,
          livereload: true
        }
      }
    },
    csslint: {
      strict: {
        options: {
          import: false,
          formatter: 'checkstyle-xml'
        },
        src: ['.css']
      }
    },
    browserify: {
      debug: true,
      dist: {
        files: {
          'build/bundle.js': ['src/**/*.js']
        },
        options: {
          transform: ['browserify-versionify', ['babelify', {sourceMaps: true}]]
        }
      }
    },
    exec: {
      transport_unix: {
        command: 'sh ./dev_env/tmp/transport.sh'
      },
      transport_win: {
        command: '.\\dev_env\\tmp\\transport.bat'
      },
      reloadcsm_unix: {
        command: 'curl -s ' + spsurl + '/admin?command=reloadconfig > /dev/null'
      },
      reloadcsm_win: {
        command: ' .\\dev_env\\curl.exe -s ' + spsurl + '/admin?command=reloadconfig > .\\dev_env\\null && DEL .\\dev_env\\null'
      }
    },
    mkdir: {
      all: {
        options: {
          create: ['dist', 'build', 'artifacts']
        }
      }
    },
    clean: {
      dist: ['dist', 'build']
    },
    copy: {
      dist: {
        files: [
          {expand: true, cwd: 'dev_env/tmp/' + pkgName, src: ['**'], dest: 'dist/'},
          { src: ['build/bundle.js'], dest: 'dist/js/bundle.js' }
        ]
      },
      module: {
        files: [
          {expand: true, cwd: 'module_data/', src: ['**'], dest: 'dev_env/tmp/' + pkgName}
        ]
      }
    },
    css_import: {
      dist: {
        files: [
          {expand: true, cwd: 'css/', src: ['style.css'], dest: 'dev_env/tmp/' + pkgName + '/css/'}
        ]
      }
    },
    replace: {
      xml: {
        options: {
          encoding: 'ISO-8859-1',
          patterns: [
            {
              match: 'ENV_PKG_NAME',
              replacement: pkgName
            },
            {
              match: 'ENV_PKG_VERSION',
              replacement: pkgVersion
            },
            {
              match: 'ENV_PKG_AUTHOR',
              replacement: pkgAuthor
            },
            {
              match: 'ENV_PKG_CSMVERSION',
              replacement: pkgCsmVersion
            },
            {
              match: 'ENV_PKG_DATE',
              replacement: pkgDate
            },
            {
              match: 'ENV_PKG_DESCRIPTION',
              replacement: pkgDescription
            }
          ]
        },
        files: [
          {expand: true, cwd: 'module_data/', src: ['**/*.xml'], dest: 'dev_env/tmp/' + pkgName},
          {expand: true, cwd: 'module_data/', src: ['**/*.js'], dest: 'dev_env/tmp/' + pkgName},
          {expand: true, flatten: true, src: ['dev_env/transport*'], dest: 'dev_env/tmp'}
        ]
      },
      txt: {
        options: {
          encoding: 'ISO-8859-1',
          patterns: [
            {
              match: 'ENV_PKG_NAME',
              replacement: pkgName
            },
            {
              match: 'ENV_PKG_VERSION',
              replacement: pkgVersion
            },
            {
              match: 'ENV_PKG_AUTHOR',
              replacement: pkgAuthor
            },
            {
              match: 'ENV_PKG_CSMVERSION',
              replacement: pkgCsmVersion
            },
            {
              match: 'ENV_PKGDATE',
              replacement: pkgDate
            },
            {
              match: 'ENV_PKG_DESCRIPTION',
              replacement: pkgDescription
            }
          ]
        },
        files: [
          {expand: true, flatten: true, src: ['module_data/readme.txt'], dest: 'dev_env/tmp/'}
        ]
      },
      html: {
        options: {
          patterns: [
            {
              match: 'ENV_SPS_URL',
              replacement: spsurl
            },
            {
              match: 'ENV_SPS_PROFILE',
              replacement: profile
            }
          ]
        },
        files: [
          {expand: true, flatten: true, src: ['dev_env/index.html'], dest: './'}
        ]
      }
    },
    compress: {
      zip: {
        options: {
          archive: 'artifacts/<%= pkg.name %>-<%= pkg.version %>.zip'
        },
        files: [
          { expand: true, cwd: 'dist', src: ['**'] }
        ]
      }
    },
    md2html: {
      one_file: {
        options: {
          layout: 'dev_env/readme_layout.html',
          highlightjs: {
            enabled: true
          }
        },
        files: [{
          src: ['Readme.md'],
          dest: 'module_data/readme.html'
        }]
      }
    },
    usebanner: {
      js: {
        options: {
          position: 'replace',
          replaceContent: '\\/\\* banner_wildcard \\*\\/',
          banner: '// banner text <%= grunt.template.today(\'yyyy\') %>',
          linebreak: true
        },
        files: {
          src: [ 'src/**/*.js' ]
        }
      },
      txt: {
        options: {
          position: 'top',
          replaceContent: '\\/\\* banner_wildcard \\*\\/',
          banner: '// banner text <%= grunt.template.today(\'yyyy\') %>',
          linebreak: true
        },
        files: {
          src: [ 'node_modules/readme.txt' ]
        }
      },
      css: {
        options: {
          position: 'top',
          banner: '// banner text <%= grunt.template.today(\'yyyy\') %>',
          linebreak: true
        },
        files: {
          src: [ 'css/style.css' ]
        }
      }
    }
  })

  require('load-grunt-tasks')(grunt)
  // Default task(s).
  grunt.registerTask('default', 'replacetxt')
  grunt.registerTask('devserver', ['connect', 'watch:win'])
  grunt.registerTask('devserverunix', ['connect', 'watch:unix'])
  grunt.registerTask('dist', ['mkdir:all', 'clean:dist', 'browserify:dist', 'copy:module', 'css_import', 'replace:xml', 'replace:txt', 'copy:dist', 'md2html', 'compress'])
}
