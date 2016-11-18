'use strict';

var gulp = require('gulp');
var resolveCwd = require('./resolveCwd');
var fs = require('fs-extra');
var path = require('path');
var runCmd = require('./util').runCmd;
var argv = require('yargs').argv;

gulp.task('js-lint', (done) => {
  var eslintBin = require.resolve('eslint/bin/eslint');
  var eslintConfig = path.join(__dirname, './eslintrc');
  var projectEslint = resolveCwd('./.eslintrc');
  if (fs.existsSync(projectEslint)) {
    eslintConfig = projectEslint;
  }
  var args = [eslintBin, '-c', eslintConfig, '--ext', '.js,.jsx', 'src', 'tests', 'examples'];
  if (argv.fix) {
    args.push('--fix');
  }
  runCmd('node', args, done);
});

gulp.task('flow-lint');

/**
 * lint
 */
gulp.task('lint', ['js-lint', 'flow-lint']);
