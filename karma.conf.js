// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['qunit'],
    files: [
        'test/**/*.js'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.js': 'coverage'
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    // browsers: ['Chrome', 'PhantomJS', 'Safari', 'Firefox', 'IE'],
    singleRun: true,
    coverageReporter: {
      type: 'text'
    }
  });
};
