const {src, dest, watch, series} = require('gulp');




/**
 * 
 * Move Files and Folder from 
 * 'build' folder to 
 * ../tw2-*
 * 
 */

/** IMPORTANT: 
 * Change working project Folder 
 * in following "src" and "watch" */



function moveFiles(){
  return src('./build/**/*.*')
  .pipe(dest('./themes'))
}

function watchTask(){
  watch('./build/**/*.*');
}

//default gulp
exports.default = series(moveFiles);